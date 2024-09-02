import React, { useState, useEffect, useContext } from "react"; // Ensure useEffect is imported
import styles from "../styles/MyBooks.module.css";
import { AuthContext } from "../context/Authcontext";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";

// Function to decode Base64Url
function base64UrlDecode(base64Url) {
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decodedString = atob(base64);
  return decodeURIComponent(
    decodedString
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
}

function MyBooks() {
  const { user } = useContext(AuthContext); // Get the user from context
  const [books, setBooks] = useState(user?.books || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://goodreadfdm.vercel.app/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.data.books);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const token = localStorage.getItem("token");
  console.log(user);
  // Decode the JWT to extract the user ID
  let userId = null;
  if (token) {
    try {
      const [, payload] = token.split(".");
      const decodedPayload = base64UrlDecode(payload);
      const payloadData = JSON.parse(decodedPayload);
      userId = payloadData._id;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  // Since books are already in the user object, you don't need to fetch them again
  useEffect(() => {
    if (userId) {
      // Simulate loading state update
      setLoading(false);
    }
  }, [userId]);

  const handleUpdateShelve = async (e) => {
    const selectedShelve = e.target.value;

    try {
      // Log the book ID and user ID for debugging
      console.log("Book ID:", book?.data?.Book._id);
      console.log("User ID:", userId);

      const response = await fetch(
        `https://goodreadfdm.vercel.app/users/books/${book?.data?.Book._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            shelve: selectedShelve,
            _id: userId,
          }),
        }
      );

      if (!response.ok) {
        // Log the response status and text for debugging
        console.error("Response status:", response.status);
        const errorText = await response.text();
        console.error("Response text:", errorText);
        throw new Error("Failed to update shelve status.");
      }

      const result = await response.json();
      console.log(result.successMessage); // Handle the success message
      setshelveValue(selectedShelve); // Update the dropdown value
    } catch (error) {
      console.error("Error updating shelve:", error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Homeheader />
      <div className={styles.myBooksContainer}>
        <h2>My Books</h2>
        <table className={styles.booksTable}>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Rate</th>
              <th>Author Name</th>
              <th>Shelve</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.title || "Unknown Title"}</td>
                <td>{book.rate}</td>
                <td>
                  {/* Add author details if available */ "Unknown Author"}
                </td>
                <td>
                  <select
                    value={book.shelve}
                    onChange={(e) =>
                      handleUpdateShelve(book.bookId, e.target.value)
                    }
                    className={styles.shelveDropdown}
                  >
                    <option value="want to read">Want to Read</option>
                    <option value="reading">Reading</option>
                    <option value="read">Read</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Homefooter />
    </>
  );
}

export default MyBooks;
