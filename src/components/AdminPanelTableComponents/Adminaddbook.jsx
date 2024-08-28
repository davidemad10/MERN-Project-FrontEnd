import '../../styles/Adminaddbook.css';
import { useRef, useState } from 'react';

function AddBook() {
    const titleRef = useRef('');
    const descRef = useRef('');
    const imageRef = useRef(null); 
    const [categoryId, setCategoryId] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [rating, setRating] = useState('');

    // function handleBook(e) {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append('title', titleRef.current.value);
    //     formData.append('image', imageRef.current.files[0]); 
    //     formData.append('desc', descRef.current.value);
    //     formData.append('categoryId', categoryId);
    //     formData.append('authorId', authorId);
    //     formData.append('rating', rating);

    //     fetch('http://localhost:5000/books', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('jwt')}`, 
    //         },
    //         body: formData,
    //     })  
    //         .then(response => response.json())
    //         .then(data => {
    //             if(data.errorMessage === "invalid token"){
    //                 alert("This session is Expired\nYou will be redirected to login page")
    //                 window.location.reload()
    //             }
    //             console.log("Book added:", data);
                                
    //             if (data.status === 'Success') {
    //                 alert("The new Book has been added successfully");
    //                 handleCancel();
    //             }
    //         })
    //         .catch(err => console.error("Error:", err));
    // }

    function handleBook(e) {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', titleRef.current.value);
        formData.append('image', imageRef.current.files[0]); 
        formData.append('desc', descRef.current.value);
        formData.append('categoryId', categoryId);
        formData.append('authorId', authorId);
        formData.append('rating', rating);
        console.log(formData)
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`, 
            },
            body: formData,
        })  
        .then(response => response.json())
        .then(data => {
            if (data.errorMessage === "invalid token") {
                alert("This session is expired\nYou will be redirected to login page");
                window.location.reload();
            }
    
            if (data.status === 'Fail' && (data.message.includes('Cast to ObjectId failed'))) {
                alert("Invalid Category ID or Author ID. Please enter valid IDs.");
            }
            else if (data.status === 'Fail' && data.message.includes('Book validation failed: rating: Path `rating` (23) is more than maximum allowed')){
                alert("Too long name or desc\nrating must be 1-5");
            }
             else if (data.status === 'Success') {
                alert("The new Book has been added successfully");
                handleCancel();
            } else {
                console.log("Book added:", data);
            }
        })
        .catch(err => console.error("Error:", err));
    }
    





    function handleCancel() {
        window.location.reload();
    }

    return (
        <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addbookCard bg-light">
            <h2 className="text-center">Add Book</h2>
            <form onSubmit={handleBook}>
                <label htmlFor="title">Book Title:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="title"
                    ref={titleRef}
                required />
                <label htmlFor="desc">Desc:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="desc"
                    ref={descRef}
                required />
                <label htmlFor="categoryId">Category ID:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="categoryId"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                required />
                <label htmlFor="authorId">Author ID:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="authorId"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                required />
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    className="form-control mb-3 mt-1"
                    id="image"
                    ref={imageRef}
                required />
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    className="form-control mb-3 mt-1"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                required />
                <div>
                    <button className="btn btn-success mt-4 px-5" type="submit">Add Book</button>
                    <button className="btn btn-dark ms-2 mt-4 px-5" onClick={handleCancel} type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddBook;
