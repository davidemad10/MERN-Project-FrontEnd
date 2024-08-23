import '../../styles/Adminaddcategory.css';
import { useRef } from 'react';

function AddCategory() {
    const newCategory = useRef('');

    function handleCategory(e){
        e.preventDefault();
        console.log(newCategory.current.value);
    }

    return (
        <>
            <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addcategoryCard">
                <h2 className="text-center">Add Category</h2>
                <form onSubmit={handleCategory}>
                    <label htmlFor="exampleInputEmail1">Category Name:</label>
                    <input type="text" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newCategory} />
                    <button className="btn btn-secondary" type="submit">Add Category</button>
                </form>
            </div>
        </>
    )
}

export default AddCategory;