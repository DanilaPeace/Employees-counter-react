import './app-info.css'

const AppInfo = ({totalEmployees, bonusCount}) => {
    return (
        <div className="app-info">
            <h1>Employees count in the ITGlobal company</h1>
            <h2>Total employees: {totalEmployees}</h2>
            <h2>Bonus will have: {bonusCount}</h2>
        </div>
    );
}

export default AppInfo;