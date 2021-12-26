import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'



const EmployeesList = ({data}) => {

    const employeesItems = data.map(employeeInfo => {
        const {id, ...employeeProps} = employeeInfo;
        return (
            <EmployeesListItem key={id} {...employeeProps}/>)
    });

    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    );
};

export default EmployeesList;