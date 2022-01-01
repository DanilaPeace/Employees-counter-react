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

    onUpdateSearch = (enteredSearchStr) => {
        this.setState({
            searchString: enteredSearchStr
        })
    };

    render() {
        const {employeesData, searchString} = this.state;
        const visibleData = this.searchEmployees(employeesData, searchString);

        return (
        <div className='app'>
                <AppInfo 
                    totalEmployees={employeesData.length}
                    bonusCount={this.bonusCounter()}/>
                
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        onAllEmpFilter={this.onAllEmpFilter}
                        onBonusFilter={this.onBonusFilter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAdd={this.addEmployee}/>
            </div>
        )
    }
    
}

export default App;