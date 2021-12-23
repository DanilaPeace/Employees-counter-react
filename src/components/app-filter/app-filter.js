import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    To up
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Salary high then 1000$
            </button>
        </div>
    );
}

export default AppFilter;