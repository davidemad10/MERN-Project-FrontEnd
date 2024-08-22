import React, { useEffect, useState } from "react";
import styles from "../styles/BookDetails.module.css"; // Using the same styles
import { Link, useParams } from "react-router-dom";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";

function AuthorDetails() {
  const { id } = useParams();
  const api_uri = "http://localhost:5000/authors";
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${api_uri}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setAuthor(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!author) {
    return <p>No author found.</p>;
  }

  return (
    <>
      <Homeheader />
      <div className={styles.resimg}>
        <img
          src={author.data.oneAuthor.image}
          className="img-thumbnail"
          alt={`${author.data.oneAuthor.firstName} ${author.data.oneAuthor.lastName}`}
        ></img>
        <div>
          <p>{`${author.data.oneAuthor.firstName} ${author.data.oneAuthor.lastName}`}</p>
          <div className={styles.descContainer}>
            <span style={{ fontSize: "1rem" }}>{author.data.oneAuthor.disc}</span>
          </div>
        </div>
      </div>

      <div className={styles.reviewsSection}>
        <h3>Books by this Author</h3>
        {author.data.oneAuthor.books && author.data.oneAuthor.books.length > 0 ? (
          author.data.oneAuthor.books.map((book) => (
            <div key={book._id} className={styles.reviewCard}>
              <Link to={`/books/${book._id}`} className="no-decoration">
                <h4 className={styles.reviewerName}>{book.title}</h4>
              </Link>
            </div>
          ))
        ) : (
          <p className={styles.reviewCard}>No books yet.</p>
        )}
      </div>
      <Homefooter />
    </>
  );
}

export default AuthorDetails;
