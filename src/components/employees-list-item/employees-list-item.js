import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bonus: false, 
            like: false
        }
    }

    onBonus = () => {
        this.setState(prevState => ({
            bonus: !prevState.bonus,
        }));
    }

    onLike = () => {
        this.setState(prevState => ({
            like: !prevState.like
        }))
    }

    render() {
        const {name, salary} = this.props; 
        const { bonus, like } = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (bonus) {
            classNames += " increase";
        }
        if (like) {
            classNames += " like";
        }

        return (
            <li 
                className={classNames}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-item-center">
                    <button 
                        type="button" 
                        className="btn-cookie btn-sm"
                        onClick={this.onBonus}>
                            <i className="fas fa-cookie"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm">
                            <i className="fas fa-trash"></i>
                    </button>

                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
};

export default EmployeesListItem;