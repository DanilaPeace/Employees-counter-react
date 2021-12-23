import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a new employeer</h3>
            <form 
                action=""
                className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="What's yout name?" />
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Sallary in $?" />

                    <button 
                        type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
        </div>
    );
};

export default EmployeesAddForm;