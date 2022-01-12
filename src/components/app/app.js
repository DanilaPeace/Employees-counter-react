import { Component } from 'react';

import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emoloyers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeesData: [
                {name: 'Sam V.', bonus: false, salary: 800, rise: true, id: 1},
                {name: 'Din W.', bonus: false, salary: 3000, rise: false, id: 2},
                {name: 'Alex H.', bonus: false, salary: 500, rise: false, id: 3}
            ], 
            searchString: '',
            filter: 'all'
        };
    }

    deleteEmployee = (id) => {
        this.setState(
            ({employeesData}) => (
                {employeesData: 
                    employeesData.filter(employee => employee.id !== id
                )}
            )
        );
    };

    addEmployee = (name, salary) => {
        const maxId = this.state.employeesData.length + 1;
        const newEmployee = {
            name,
            salary,
            rise: false,
            id: maxId
        }

        this.setState(({employeesData}) => ( 
            {employeesData: [...employeesData, newEmployee]}
        ));
    };

    onToggleProp = (id, prop) => {
        this.setState(({employeesData}) => ({
            employeesData: employeesData.map(employee => {
                if (employee.id === id) {
                    return {
                        ...employee, [prop]: !employee[prop] 
                    }
                } 
                
                return employee;
            })
        }))
    }

    bonusCounter = () => this.state.employeesData.filter(employee => employee.bonus).length;

    searchEmployees = (employeesArr) => {
        const {searchString} = this.state;
        if (searchString === 0) return employeesArr;

        return (employeesArr.filter(employee => {
            return employee.name.indexOf(searchString) > -1;
        }))
    };

    filterEmployees = (employeesArr, filter) => {
        const MIN_SALARY_VALUE = 1000;
        switch (filter) {
            case 'bonus': 
                return employeesArr.filter(employee => employee.bonus);
            case 'moreThen1000': 
                return employeesArr.filter(employee => employee.salary >= MIN_SALARY_VALUE);
            default: 
                return employeesArr
        }
    }

    onUpdateSearch = (enteredSearchStr) => {
        this.setState({
            searchString: enteredSearchStr
        })
    };

    onFilterSelect = (filter) => {
        this.setState({
            filter
        });
    };

    salaryChange = (id, newSalary) => {
        this.setState(({employeesData}) => ({
            employeesData: employeesData.map(employee => {
                if (employee.id === id) {
                    return {...employee, salary: newSalary}
                }

                return employee;            
            })
        }))
    }

    render() {
        const {employeesData, searchString, filter} = this.state;
        const visibleData = this.filterEmployees(
            this.searchEmployees(employeesData, searchString),
            filter
        );

        return (
        <div className='app'>
                <AppInfo 
                    totalEmployees={employeesData.length}
                    bonusCount={this.bonusCounter()}/>
                
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                       onFilterSelect={this.onFilterSelect}
                       filter={filter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}
                    salaryChange={this.salaryChange}/>
                <EmployeesAddForm 
                    onAdd={this.addEmployee}/>
            </div>
        )
    }
    
}

export default App;