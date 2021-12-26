import './app.css';
import { SearchPanel } from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emoloyers-add-form/employers-add-form';

function App() {

    const employeesData = [
        {name: 'Sam V.', salary: 800, id: 1},
        {name: 'Din W.', salary: 3000, id: 2},
        {name: 'Alex H.', salary: 500, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={employeesData}/>
            <EmployeesAddForm />
        </div>
    )
}

export default App;