import React, { useEffect, useState } from "react";
import styles from "../styles/AuthorList.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";
import { Link } from "react-router-dom";

function Author() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://goodreadfdm.vercel.app/authors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAuthors(data.data.authors); // Updated to reflect author data
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
      <Homeheader />
      <div className={styles.book_list}>
        {authors.map((author) => (
          <div className={styles.row} key={author._id}>
            <div className={styles.card}>
              <Link to={`/authors/${author._id}`} className="no-decoration">
                <img src={author.image} alt={author.firstName}></img>
                <h2>
                  {author.firstName} {author.lastName}
                </h2>
                <p>{author.disc}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Homefooter />
    </>
  );
}

export default Author;
