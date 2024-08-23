// import "../../styles/Adminaddbook.css";
// import { useRef, useState, useEffect } from "react";

// function EditAuthor({ record }) {
//     const firstNameRef = useRef("");
//     const lastNameRef = useRef("");
//     const discRef = useRef("");
//     const imageRef = useRef(null); // For file upload
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [disc, setDisc] = useState("");
//     const [image, setImage] = useState("");

//     useEffect(() => {
//         if (record) {
//             setFirstName(record.firstName || '');
//             setLastName(record.lastName || '');
//             setDisc(record.disc || '');
//             setImage(record.image || '');
//         }
//     }, [record]);

//     function handleAuthor(e) {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('firstName', firstNameRef);
//         if (imageRef.current && imageRef.current.files.length > 0) {
//             formData.append('image', imageRef.current.files[0]);
//         }
//         formData.append('lastName', lastNameRef);
//         formData.append('disc', discRef);

//         fetch(`http://localhost:5000/authors/${record._id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
//             },
//             body: formData, // Sending form data
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Category updated:", data);
//                 if (data.status === 'Success') {
//                     alert("The category has been updated successfully");
//                     handleCancel() // Redirect after success
//                 }
//             })
//             .catch(err => console.error("Error:", err));
//     }

//     function handleCancel() {
//         window.location.reload();
//     }

//     return (
//         <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addauthorCard">
//             <h2 className="text-center">Add Author</h2>
//             <form onSubmit={handleAuthor}>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                     type="text"
//                     className="form-control mb-3 mt-1"
//                     id="firstName"
//                     ref={firstNameRef}
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     type="text"
//                     className="form-control mb-3 mt-1"
//                     id="lastName"
//                     ref={lastNameRef}
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <label htmlFor="dateOfBirth">Date of Birth:</label>
//                 {/* <input
//               type="date"
//               className="form-control mb-3 mt-1"
//               id="dateOfBirth"
//               ref={dateOfBirthRef}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//             /> */}
//                 <label htmlFor="disc">Description:</label>
//                 <textarea
//                     className="form-control mb-3 mt-1"
//                     id="disc"
//                     ref={discRef}
//                     value={disc}
//                     onChange={(e) => setDisc(e.target.value)}
//                 ></textarea>
//                 <label htmlFor="authorImage">Author Image:</label>
//                 <input
//                     type="file"
//                     className="form-control mb-3 mt-1"
//                     id="authorImage"
//                     ref={imageRef}
//                     value={image}
//                 />
//                 <div>
//                     <button className="btn btn-dark mt-4 px-5" type="submit">
//                         Update Author
//                     </button>
//                     <button
//                         className="btn btn-secondary ms-2 mt-4 px-5"
//                         onClick={handleCancel}
//                         type="button"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default EditAuthor;


import "../../styles/Adminaddbook.css";
import { useRef, useState, useEffect } from "react";

function EditAuthor({ record }) {
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const discRef = useRef("");
    const imageRef = useRef(null); // For file upload
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [disc, setDisc] = useState("");
    const [image, setImage] = useState(""); // This will hold the image file

    useEffect(() => {
        if (record) {
            setFirstName(record.firstName || '');
            setLastName(record.lastName || '');
            setDisc(record.disc || '');
            setImage(record.image || '');
        }
    }, [record]);

    function handleAuthor(e) {
        e.preventDefault();

        // Prepare the payload
        const payload = {
            firstName,
            lastName,
            disc,
        };

        // Send the image separately
        const imageFile = imageRef.current?.files[0];
        console.log(payload)
        // Use a single request to update the data
        fetch(`http://localhost:5000/authors/${record._id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload), // Send JSON payload
        })
            .then(response => response.json())
            .then(data => {
                if(data.errorMessage === "invalid token"){
                    alert("This session is Expired\nYou will be redirected to login page")
                    window.location.reload()
                }
                if (data.status === 'success') {
                    // Handle image upload if necessary
                    if (imageFile) {
                        const imageFormData = new FormData();
                        imageFormData.append('image', imageFile);

                        fetch(`http://localhost:5000/authors/${record._id}/image`, {
                            method: 'PATCH',
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                            },
                            body: imageFormData, // Sending image form data
                        })
                            .then(response => response.json())
                            .then(imageData => {
                                if (imageData.status === 'success') {
                                    alert("The author has been updated successfully");
                                    handleCancel();
                                }
                            })
                            .catch(err => console.error("Image upload error:", err));
                    } else {
                        alert("The author has been updated successfully");
                        handleCancel();
                    }
                }
            })
            .catch(err => console.error("Update error:", err));
    }

    function handleCancel() {
        window.location.reload();
    }

    return (
        <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addauthorCard">
            <h2 className="text-center">Edit Author</h2>
            <form onSubmit={handleAuthor}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="firstName"
                    ref={firstNameRef}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    className="form-control mb-3 mt-1"
                    id="lastName"
                    ref={lastNameRef}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="disc">Description:</label>
                <textarea
                    className="form-control mb-3 mt-1"
                    id="disc"
                    ref={discRef}
                    value={disc}
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
                    <button className="btn btn-dark mt-4 px-5" type="submit">
                        Update Author
                    </button>
                    <button
                        className="btn btn-secondary ms-2 mt-4 px-5"
                        onClick={handleCancel}
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditAuthor;

