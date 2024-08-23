import '../../styles/Adminaddbook.css';
import { useRef } from 'react';
import Authordropmenu from '../Authordropmenu';
import Categorydropmenu from '../Categorydropmenu';

function AddBook() {
    const newBook = useRef('');

    function handleBook(e) {
        e.preventDefault();
        console.log(newBook.current.value);
    }

    return (
        <>
            <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addcategoryCard">
                <h2 className="text-center">Add Book</h2>
                <form onSubmit={handleBook}>
                    <label htmlFor="exampleInputEmail1">Book Name:</label>
                    <input type="text" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newBook} />
                    <label for="exampleFormControlSelect1">Example select</label>
                    <Categorydropmenu />
                    <label for="exampleFormControlSelect1">Author: </label>
                    <Authordropmenu />
                    <label htmlFor="exampleInputEmail1">Image:</label>
                    <input type="file" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newBook} />
                    <button className="btn btn-secondary mt-4 px-5" type="submit">Add Book</button>
                </form>
            </div>
        </>
    )
}

export default AddBook;