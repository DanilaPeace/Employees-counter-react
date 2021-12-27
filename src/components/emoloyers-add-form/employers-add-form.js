import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        this.props.onAdd(this.state.name, this.state.salary)

        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employeer</h3>
                <form 
                    action=""
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                        <input 
                            type="text" 
                            className="form-control new-post-label"
                            placeholder="What's yout name?"
                            name="name"
                            value={name}
                            onChange={this.onValueChange} />
                        <input 
                            type="number" 
                            className="form-control new-post-label"
                            placeholder="Sallary in $?"
                            name='salary'
                            value={salary}
                            onChange={this.onValueChange}/>
    
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