import React, { useEffect, useState } from "react";
import styles from "../styles/BookList.module.css";
import { Link } from "react-router-dom";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";
import generateStars from "./stargenerate";

function BooksList() {
  const [books, setBooks] = useState([]);
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
        {books.map((book) => (
          <div className={styles.row} key={book._id}>
            <div className={styles.card}>
              <Link to={`/books/${book._id}`} className="no-decoration">
                <img src={book.image}></img>
                <h2>{book.title}</h2>
                <p>{book.rating ? generateStars(book.rating) : ""}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Homefooter />
    </>
  );
}

export default BooksList;
