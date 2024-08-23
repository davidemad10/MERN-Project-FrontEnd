import '../../styles/Adminaddbook.css';
import { useRef, useState, useEffect } from 'react';

function Editbook({ record }) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [rating, setRating] = useState('');
    const imageRef = useRef(null); // For file upload

    // Initialize the form fields with the record values
    useEffect(() => {
        if (record) {
            setTitle(record.title || '');
            setDesc(record.desc || '');
            setCategoryId(record.categoryId || '');
            setAuthorId(record.authorId || '');
            setRating(record.rating || '');
        }
    }, [record]);


    function handleBook(e) {
        e.preventDefault();

        const updateData = {
            title,
            desc,
            categoryId,
            authorId,
            rating
        };

        if (imageRef.current && imageRef.current.files.length > 0) {
            updateData.image = imageRef.current.files[0].name; 
        }

        fetch(`http://localhost:5000/books/${record._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`, 
            },
            body: JSON.stringify(updateData), 
        })
            .then(response => response.json())
            .then(data => {
                if(data.errorMessage === "invalid token"){
                    alert("This session is Expired\nYou will be redirected to login page")
                    window.location.reload()
                }
                console.log("Book updated:", data);
                if (data.status === 'success') {
                    alert("The book has been updated successfully");
                    handleCancel();
                }
            })
            .catch(err => console.error("Error:", err));
    }





    function handleCancel() {
        window.location.reload(); 
    }

    return (
        <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addbookCard">
            <h2 className="text-center">Edit Book</h2>
            <form onSubmit={handleBook}>
                <label htmlFor="title">Book Title:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="desc">Desc:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <label htmlFor="categoryId">Category ID:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="categoryId"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                />
                <label htmlFor="authorId">Author ID:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="authorId"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                />
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    className="form-control mb-3 mt-1"
                    id="image"
                    ref={imageRef}
                />
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    className="form-control mb-3 mt-1"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <div>
                    <button className="btn btn-dark mt-4 px-5" type="submit">Update Book</button>
                    <button className="btn btn-secondary ms-2 mt-4 px-5" onClick={handleCancel} type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Editbook;
