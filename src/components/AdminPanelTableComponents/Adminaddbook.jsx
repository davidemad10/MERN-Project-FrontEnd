import '../../styles/Adminaddbook.css';
import { useRef, useState } from 'react';

function AddBook() {
    const titleRef = useRef('');
    const descRef = useRef('');
    const imageRef = useRef(null); // for file upload
    const [categoryId, setCategoryId] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [rating, setRating] = useState('');

    function handleBook(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', titleRef.current.value);
        formData.append('image', imageRef.current.files[0]); // Assuming the image is uploaded
        formData.append('desc', descRef.current.value);
        formData.append('categoryId', categoryId);
        formData.append('authorId', authorId);
        formData.append('rating', rating);

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`, // Include JWT
            },
            body: formData, // Sending form data
        })  
            .then(response => response.json())
            .then(data => {
                if(data.errorMessage === "invalid token"){
                    alert("This session is Expired\nYou will be redirected to login page")
                    window.location.reload()
                }
                console.log("Book added:", data);
                                
                if (data.status === 'Success') {
                    // Show success alert and reload page
                    alert("The new Book has been added successfully");
                    handleCancel();
                }
            })
            .catch(err => console.error("Error:", err));
    }
    function handleCancel() {
        window.location.reload(); // Reload the current page
    }

    return (
        <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addbookCard">
            <h2 className="text-center">Add Book</h2>
            <form onSubmit={handleBook}>
                <label htmlFor="title">Book Title:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="title"
                    ref={titleRef}
                    required
                />
                <label htmlFor="desc">Desc:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="desc"
                    ref={descRef}
                    required
                />
                <label htmlFor="categoryId">Category ID:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="categoryId"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    required
                />
                <label htmlFor="authorId">Author ID:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="authorId"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    required
                />
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    className="form-control mb-3 mt-1"
                    id="image"
                    ref={imageRef}
                    required
                />
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    className="form-control mb-3 mt-1"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    // required
                />
                <div>
                    <button className="btn btn-dark mt-4 px-5" type="submit">Add Book</button>
                    <button className="btn btn-secondary ms-2 mt-4 px-5" onClick={handleCancel} type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddBook;
