import React, { useEffect, useState } from "react";
import styles from "../styles/BookDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarRegular,
} from "@fortawesome/free-solid-svg-icons";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";

function BooksDetails() {
  const { id } = useParams();
  const api_uri = "http://localhost:5000/books";
  const [book, setBook] = useState(null);
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
        setBook(data);
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

  if (!book) {
    return <p>No book found.</p>;
  }

  //function to generate stars
  const generateStars = (rating) => {
    const maxStars = 5;
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          size="xs"
          icon={faStar}
          style={{ color: "rgb(255, 215, 0)" }}
        />
      );
    }

    if (halfStar) {
      stars.push(
        <FontAwesomeIcon
          size="xs"
          key="half"
          icon={faStarHalfAlt}
          style={{ color: "rgb(255, 215, 0)" }}
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          size="xs"
          key={`empty-${i}`}
          icon={faStarRegular}
          style={{ color: "lightgray" }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <Homeheader />
      <div className={styles.resimg}>
        <img
          src={book.data.Book.image}
          className="img-thumbnail"
          alt={book.data.Book.title}
        ></img>
        <div>
          <p> {book.data.Book.title}</p>
          <p>
            {book.data.Book.rating ? generateStars(book.data.Book.rating) : ""}
            <span style={{ fontSize: "2rem", paddingLeft: "1rem" }}>
              {book.data.Book.rating}
            </span>
          </p>
          <div className={styles.descContainer}>
            <span style={{ fontSize: "1rem" }}>{book.data.Book.desc}</span>
          </div>
        </div>
      </div>
      <Homefooter />
    </>
  );
}

export default BooksDetails;
