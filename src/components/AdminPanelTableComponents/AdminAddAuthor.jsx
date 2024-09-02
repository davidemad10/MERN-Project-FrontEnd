// import "../../styles/Adminaddbook.css";
// import { useRef, useState } from "react";

// function AddAuthor() {
//   const firstNameRef = useRef("");
//   const lastNameRef = useRef("");
//   const discRef = useRef("");
//   const imageRef = useRef(null); // for file upload
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [disc, setDisc] = useState("");

//   async function handleAuthor(e) {
//     e.preventDefault();

//     let formData = new FormData();
//     formData.append("firstName", firstNameRef.current.value);
//     formData.append("lastName", lastNameRef.current.value);
//     formData.append("disc", discRef.current.value);
//     formData.append("image", imageRef.current.files[0]); // Assuming the image is uploaded

//     console.log("Data: >>>    ",formData)
//     console.log(firstNameRef.current.value)
//     console.log(lastNameRef.current.value)
//     console.log(discRef.current.value)
//     console.log(imageRef.current.files[0])

//     await fetch("http://localhost:5000/authors", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Include JWT
//       },
//       body: formData, // Sending form data
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.errorMessage === "invalid token") {
//           alert("This session is Expired\nYou will be redirected to login page")
//           window.location.reload()
//         }
//         console.log("Author added:", data);
//         if (data.status === "success") {
//           // Show success alert and reload page
//           alert("The new author has been added successfully");
//           handleCancel();
//         }
//       })
//       .catch((err) => console.error("Error:", err));
//   }

//   function handleCancel() {
//     window.location.reload(); // Reload the current page
//   }

//   return (
//     <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addauthorCard">
//       <h2 className="text-center">Add Author</h2>
//       <form onSubmit={handleAuthor}>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           className="form-control mb-3 mt-1"
//           id="firstName"
//           ref={firstNameRef}
//           // onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           className="form-control mb-3 mt-1"
//           id="lastName"
//           ref={lastNameRef}
//           // onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//         <label htmlFor="disc">Description:</label>
//         <textarea
//           className="form-control mb-3 mt-1"
//           id="disc"
//           ref={discRef}
//           // onChange={(e) => setDisc(e.target.value)}
//           required
//         ></textarea>
//         <label htmlFor="authorImage">Author Image:</label>
//         <input
//           type="file"
//           className="form-control mb-3 mt-1"
//           id="authorImage"
//           ref={imageRef}
//           required
//         />
//         <div>
//           <button className="btn btn-dark mt-4 px-5" type="submit">
//             Add Author
//           </button>
//           <button
//             className="btn btn-secondary ms-2 mt-4 px-5"
//             onClick={handleCancel}
//             type="button"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddAuthor;

import "../../styles/Adminaddbook.css";
import { useRef, useState } from "react";

function AddAuthor() {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const discRef = useRef("");
  const imageRef = useRef(null); // for file upload
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [disc, setDisc] = useState('');

  function handleAuthor(e) {
    e.preventDefault();

    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);
    console.log(discRef.current.value);
    console.log(imageRef.current.files[0]);

    const authorData = new FormData();
    authorData.append("firstName", firstNameRef.current.value);
    authorData.append("lastName", lastNameRef.current.value);
    authorData.append("image", imageRef.current.files[0]);
    authorData.append("disc", discRef.current.value);
    const url = `https://goodreadfdm.vercel.app/authors`;
    fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: authorData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errorMessage === "invalid token") {
          alert(
            "This session is expired\nYou will be redirected to login page"
          );
          window.location.reload();
        } else if (
          data.status === "Fail" &&
          data.message.includes(
            "Book validation failed: rating: Path `rating` (23) is more than maximum allowed"
          )
        ) {
          alert("Too long name");
        } else if (data.status === "success") {
          console.log(data);
          alert("The new Author has been added successfully");
          handleCancel();
        } else {
          console.log("Author added:", data);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
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
          required
          // onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          className="form-control mb-3 mt-1"
          id="lastName"
          ref={lastNameRef}
          required
          // onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="disc">Description:</label>
        <textarea
          className="form-control mb-3 mt-1"
          id="disc"
          ref={discRef}
          required
          // onChange={(e) => setDisc(e.target.value)}
        ></textarea>
        <label htmlFor="authorImage">Author Image:</label>
        <input
          type="file"
          className="form-control mb-3 mt-1"
          id="authorImage"
          ref={imageRef}
          required
        />
        <div>
          <button className="btn btn-dark mt-4 px-5" type="submit">
            Add Author
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

export default AddAuthor;
