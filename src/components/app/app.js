import { Component } from 'react';

import { SearchPanel } from '../search-panel/search-panel';
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
            ]
        }
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

    onToggleBonus = (id) => {
        this.setState(({employeesData}) => {
            const indexOfEmployee = employeesData.findIndex(employee => employee.id === id);
            const old = employeesData[indexOfEmployee];
            const newEmployee = {...old, bonus: !old.bonus};
            const newEmployeesData = employeesData.slice();
            newEmployeesData[indexOfEmployee] = newEmployee;
            return ({
                employeesData: newEmployeesData
            })
        })
    }

    onToggleRise = (id) => {
        this.setState(({employeesData}) => ({
            employeesData: employeesData.map(employee => {
                if (employee.id === id) {
                    return {
                        ...employee, rise: !employee.rise 
                    }
                } 
                
                return employee;
            })
        }))
    }

    bonusCounter = () => this.state.employeesData.filter(employee => employee.bonus).length

    render() {
        const {employeesData} = this.state;

        return (
        <div className='app'>
                <AppInfo 
                    totalEmployees={this.state.employeesData.length}
                    bonusCount={this.bonusCounter()}/>
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={employeesData}
                    onDelete={this.deleteEmployee}
                    onToggleBonus={this.onToggleBonus}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm 
                    onAdd={this.addEmployee}/>
            </div>
        )
    }
    
}

export default App;