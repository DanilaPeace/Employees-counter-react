import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'



const EmployeesList = ({data, onDelete, onToggleProp, salaryChange}) => {

    const employeesItems = data.map(employeeInfo => {
        const {id, ...employeeProps} = employeeInfo;
        return (
            <EmployeesListItem 
                key={id} 
                {...employeeProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={(event) => salaryChange(id, event.currentTarget.value)}/>
    )})

    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    );
}

export default EmployeesList;