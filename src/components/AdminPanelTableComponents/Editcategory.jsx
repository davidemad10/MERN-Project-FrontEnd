
import '../../styles/Adminaddcategory.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

function EditCategory({ record }) {
    const categoryNameRef = useRef('');
    const imageRef = useRef(null); // For file upload
    const [categoryName, setCategoryName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    // Initialize the form fields with the record values
    useEffect(() => {
        if (record) {
            setCategoryName(record.categoryName || '');
            setImage(record.image || ''); // Update the image if needed
        }
    }, [record]);

    function handleCategory(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('categoryName', categoryName);
        if (imageRef.current && imageRef.current.files.length > 0) {
            formData.append('image', imageRef.current.files[0]);
        }

        fetch(`http://localhost:5000/categories/${record._id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`, 
            },
            body: formData, // Sending form data
        })
            .then(response => response.json())
            .then(data => {
                if(data.errorMessage === "invalid token"){
                    alert("This session is Expired\nYou will be redirected to login page")
                    window.location.reload()
                }
                console.log("Category updated:", data);
                if (data.status === 'Success') {
                    alert("The category has been updated successfully");
                    handleCancel() // Redirect after success
                }
            })
            .catch(err => console.error("Error:", err));
    }

    function handleCancel() {
        window.location.reload(); 
    }

    return (
        <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addcategoryCard">
            <h2 className="text-center">Edit Category</h2>
            <form onSubmit={handleCategory}>
                <label htmlFor="categoryName">Category Name:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="categoryName"
                    ref={categoryNameRef}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <label htmlFor="categoryImage">Category Image:</label>
                <input
                    type="file"
                    className="form-control mb-3 mt-1"
                    id="categoryImage"
                    ref={imageRef}
                />
                <div>
                    <button className="btn btn-dark mt-4 px-5" type="submit">Update Category</button>
                    <button className="btn btn-secondary ms-2 mt-4 px-5" onClick={handleCancel} type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditCategory;
