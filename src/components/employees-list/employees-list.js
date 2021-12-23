import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'



const EmployeesList = ({data}) => {

    const employeesItems = data.map(employeeInfo => {
        return (
            <EmployeesListItem {...employeeInfo}/>)
    });

    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    );
};

export default EmployeesList;