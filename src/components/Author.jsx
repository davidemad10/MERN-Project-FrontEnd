import React, { useEffect, useState } from "react";
import styles from "../styles/BookList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homeheader from "./Homeheader";

function Author() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/authors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAuthors(data.data.authors);  // Updated to reflect author data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Homeheader/>
      <div className={styles.cardStyle}>
        {authors.map((author) => (
          <div className="card" style={{ width: "18rem" }} key={author._id}>
            <img
              src={author.image}  // Assuming each author has an image property
              className={`card-img-top ${styles.cardImage}`}
              alt={author.firstName}  // Use author's first name as alt text
            ></img>
            <div className="card-body">
              <h6 className="card-title">{`${author.firstName} ${author.lastName}`}</h6>  {/* Display full name */}
              <a href="#" className="btn btn-primary">
                View Author
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Author;
