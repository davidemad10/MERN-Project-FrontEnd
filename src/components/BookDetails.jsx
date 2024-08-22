import React, { useEffect, useState } from "react";
import styles from "../styles/BookDetails.module.css";
import { Link, useParams } from "react-router-dom";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";
import generateStars from "./stargenerate";
import useCategory from "../hook/useCategory";

function BooksDetails() {
  const { id } = useParams();
  const api_uri = "http://localhost:5000/books";
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    category,
    loading: categoryLoading,
    error: categoryError,
  } = useCategory(book?.data?.Book?.categoryId);

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
  if (loading || categoryLoading) {
    return <p>Loading...</p>;
  }

  if (error || categoryError) {
    return <p>Error: {error || categoryError}</p>;
  }

  if (!book) {
    return <p>No book found.</p>;
  }
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
          <Link
            to={`/categories/${book.data.Book.categoryId}`}
            className="no-decoration"
          >
            <span className={styles.categorynamespan}>
              {category.data.Category.categoryName}
            </span>
          </Link>
          <p className={styles.starhover}>
            {book.data.Book.rating ? generateStars(book.data.Book.rating) : ""}
            <span className={styles.ratingspan}>{book.data.Book.rating}</span>
          </p>
          <div className={styles.descContainer}>
            <span style={{ fontSize: "1rem" }}>{book.data.Book.desc}</span>
          </div>
        </div>
      </div>

      <div className={styles.reviewsSection}>
        <h3>Reviews</h3>
        {book.data.Book.reviews && book.data.Book.reviews.length > 0 ? (
          book.data.Book.reviews.map((review) => (
            <div key={review._id} className={styles.reviewCard}>
              <h4 className={styles.reviewerName}>{review.reviewerName}</h4>
              <p className={styles.reviewDate}>
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
              <p className={styles.reviewComment}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p className={styles.reviewCard}>No reviews yet.</p>
        )}
      </div>
      <Homefooter />
    </>
  );
}

export default BooksDetails;
