import React, { useEffect, useState } from "react";
import styles from "../styles/BookList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AuthorList() {
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
        setAuthors(data.data.authors);
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
    // <div className={styles.book_list}>
    //   {authors.map((book) => (
    //     <div className={styles.row}>
    //       <div className={styles.card} key={book._id}>
    //         <img src={book.image}></img>
    //         <h3>{book.title}</h3>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <>
      <div className={styles.cardStyle}>
        {authors.map((author) => (
          <div className="card" style={{ width: "18rem" }} key={author._id}>
            <img
              src={author.image}
              className={`card-img-top ${styles.cardImage}`}
              alt={author.title}
            ></img>
            <div className="card-body">
              <h6 className="card-title">{author.title}</h6>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AuthorList;
