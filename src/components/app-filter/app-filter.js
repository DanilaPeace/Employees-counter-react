import './app-filter.css';

const AppFilter = ({onFilterSelect, filter}) => {
    const onFilterClick = (event) => {
        onFilterSelect(event.target.name);
    };

    const buttonsData = [
        {btnName: 'all', label: 'All employees'},
        {btnName: 'bonus', label: 'To up'},
        {btnName: 'moreThen1000', label: 'Salary more then 1000$'},
    ] 

    const buttons = buttonsData.map(({btnName, label}) => {
        const active = filter === btnName; 
        const clazz = active ?  'btn-light' :'btn-outline-light';
        return (
            <button 
                key={btnName}
                className={`btn ${clazz}`}
                type="button"
                name={btnName}
                onClick={onFilterClick}>
                    {label}
            </button>    
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;