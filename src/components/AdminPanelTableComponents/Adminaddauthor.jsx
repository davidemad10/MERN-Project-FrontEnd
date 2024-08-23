// import '../../styles/Adminaddbook.css';
// import { useRef } from 'react';
// import Authordropmenu from '../Authordropmenu';
// import Categorydropmenu from '../Categorydropmenu';

// function AddBook() {
//     const newBook = useRef('');

//     function handleBook(e) {
//         e.preventDefault();
//         console.log(newBook.current.value);
//     }

//     return (
//         <>
//             <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addcategoryCard">
//                 <h2 className="text-center">Add Book</h2>
//                 <form onSubmit={handleBook}>
//                     <label htmlFor="exampleInputEmail1">First Name:</label>
//                     <input type="text" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newBook} />
//                     <label htmlFor="exampleInputEmail1">Last Name:</label>
//                     <input type="text" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newBook} />
//                     <label htmlFor="exampleInputEmail1">Image:</label>
//                     <input type="file" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newBook} />
//                     <label htmlFor="exampleInputEmail1">Desc</label>
//                     <input type="text" className="form-control mb-3 mt-1" id="exampleInputEmail1" ref={newBook} />
//                     <div>
//                         <button className="btn btn-dark mt-4 px-5" type="submit">Add Book</button>
//                         <button className="btn btn-secondary ms-2 mt-4 px-5" type="submit">Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default AddBook;

import '../../styles/Adminaddbook.css'
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

function AddAuthor() {
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const dateOfBirthRef = useRef('');
    const discRef = useRef('');
    const imageRef = useRef(null); // for file upload
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [disc, setDisc] = useState('');
    const navigate = useNavigate();

    function handleAuthor(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('disc', disc);
        formData.append('image', imageRef.current.files[0]); // Assuming the image is uploaded

        fetch('http://localhost:5000/authors', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`, // Include JWT
            },
            body: formData, // Sending form data
        })
            .then(response => response.json())
            .then(data => {
                console.log("Author added:", data);
                if (data.status === 'success') {
                    // Show success alert and reload page
                    alert("The new author has been added successfully");
                    handleCancel();
                }
            })
            .catch(err => console.error("Error:", err));
    }

    function handleCancel() {
        window.location.reload(); // Reload the current page
    }

    return (
        <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addauthorCard">
            <h2 className="text-center">Add Author</h2>
            <form onSubmit={handleAuthor}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="firstName"
                    ref={firstNameRef}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="lastName"
                    ref={lastNameRef}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                    type="date"
                    className="form-control mb-3 mt-1"
                    id="dateOfBirth"
                    ref={dateOfBirthRef}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <label htmlFor="disc">Description:</label>
                <textarea
                    className="form-control mb-3 mt-1"
                    id="disc"
                    ref={discRef}
                    onChange={(e) => setDisc(e.target.value)}
                ></textarea>
                <label htmlFor="authorImage">Author Image:</label>
                <input
                    type="file"
                    className="form-control mb-3 mt-1"
                    id="authorImage"
                    ref={imageRef}
                />
                <div>
                    <button className="btn btn-dark mt-4 px-5" type="submit">Add Author</button>
                    <button className="btn btn-secondary ms-2 mt-4 px-5" onClick={handleCancel} type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddAuthor;
