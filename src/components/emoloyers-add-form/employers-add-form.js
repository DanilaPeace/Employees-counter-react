import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        const name = '';
        const salary = '';
        this.state = {
            name,
            salary,
            nameValid: this.nameValidate(name),
            salaryValid: this.salaryValidate(salary)
        };
    }

    setInitialState = (name, salary) => {
        this.setState({
            name,
            salary,
            nameValid: this.nameValidate(name),
            salaryValid: this.salaryValidate(salary)
        });
    }

    nameValidate = (name) => {
        const MIN_LENGTH_OF_EMPLOYEE_NAME = 3;
        return name.length >= MIN_LENGTH_OF_EMPLOYEE_NAME;
    };

    salaryValidate = (salary) => {
        return salary > 0;
    };

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState({
            name,
            nameValid: this.nameValidate(name)
        })
    }

    onSalaryChange = (event) => {
        const salary = event.target.value;
        this.setState({
            salary,
            salaryValid: this.salaryValidate(salary)
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.state.nameValid && this.state.salaryValid) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setInitialState('', '');
        } else {
            alert("Length of name of the employee must be more then 3 symbols or salary of the employee must be more then 0$");
        }

    }
    render() {
        const {name, salary} = this.state;
        const nameFieldBorderColor = this.state.nameValid ? 'green' : 'red';
        const salaryFieldBorderColor = this.state.salaryValid ? 'green' : 'red';

        return (
            <div className="app-add-form">
                <h3>Add a new employeer</h3>
                <form 
                    action=""
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                        <input 
                            style={{borderColor: nameFieldBorderColor}}
                            type="text" 
                            className="form-control new-post-label"
                            placeholder="What's yout name?"
                            value={name}
                            onChange={this.onNameChange} />
                        <input 
                            style={{borderColor: salaryFieldBorderColor}}
                            type="number" 
                            className="form-control new-post-label"
                            placeholder="Sallary in $?"
                            value={salary}
                            onChange={this.onSalaryChange}/>
    
                        <button 
                            type="submit"
                            className="btn btn-outline-light"
                            >Add</button>
                    </form>
            </div>
        );
    }
};

export default EmployeesAddForm;