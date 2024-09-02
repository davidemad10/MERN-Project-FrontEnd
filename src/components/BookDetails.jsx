import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/BookDetails.module.css";
import { Link, useParams } from "react-router-dom";
import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";
import generateStars from "./stargenerate";
import useCategory from "../hook/useCategory";
import useAuthor from "../hook/useAuthor";
import useUser from "../hook/useUser";
import { AuthContext } from "../context/Authcontext";

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

function BooksDetails() {
  const { id } = useParams();
  const api_uri = "https://goodreadfdm.vercel.app/books";
  const [book, setBook] = useState(null);
  const [userq, setuserq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [reviewing, setReviewing] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loadingFavorite, setLoadingFavorite] = useState(false);
  const [shelveValue, setshelveValue] = useState("want to read");
  const { user, isLoggedIn } = useContext(AuthContext);

  const {
    category,
    loading: categoryLoading,
    error: categoryError,
  } = useCategory(book?.data?.Book?.categoryId);
  const {
    author,
    loading: authorLoading,
    error: authorError,
  } = useAuthor(book?.data?.Book?.authorId);
  const token = localStorage.getItem("token");

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
  const {
    user: userDetails,
    loading: userLoading,
    error: userError,
  } = useUser(userId);
  useEffect(() => {
    fetch(`${api_uri}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("Fetched data:", data);
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToFavorite = async () => {
    if (isFavorite) return;

    setLoadingFavorite(true);
    try {
      const response = await fetch(
        `https://goodreadfdm.vercel.app/users/books/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            _id: userId,
            bookId: book?.data?.Book?._id,
          }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.text();
        console.error("Error Response:", errorResponse);
        throw new Error("Failed to add to favorite.");
      }

      const result = await response.json();
      console.log("Response Data:", result);

      if (result.books) {
        const favoriteBook = result.books.find(
          (book) => book.bookId === book?.data?.Book?._id
        );
        setIsFavorite(favoriteBook ? favoriteBook.isFavorite : true);
      }
    } catch (error) {
      console.error("Error adding to favorite:", error.message);
    } finally {
      setLoadingFavorite(false);
    }
  };

  // const handleRemoveFromFavorite = async () => {
  //   if (!isFavorite) return; // Prevent additional clicks if not a favorite
  //   setLoadingFavorite(true);
  //   try {
  //     const response = await fetch(`http://localhost:5000/users/books/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         _id: userId,
  //         bookId: book?.data?.Book?._id,
  //       }),
  //     });
  //   }
  //   catch (error) {
  //     console.error("Error removing from favorite:", error.message);
  //   } finally {
  //     setLoadingFavorite(false);
  //   }
  //   };

  const handleUpdateShelve = async (e) => {
    const selectedShelve = e.target.value;

    try {
      // Log the book ID and user ID for debugging
      console.log("Book ID:", book?.data?.Book._id);
      console.log("User ID:", userId);

      const response = await fetch(
        `http://localhost:5000/users/books/${book?.data?.Book._id}`,
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (token) {
      setReviewing(true);
      const reviewerName = `${user.user.firstName} ${user.user.lastName}`;
      const review = {
        reviewerName: reviewerName,
        comment: reviewText,
        createdAt: new Date().toISOString(),
        bookId: book.data.Book._id,
      };

      try {
        const response = await fetch(`${api_uri}/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(review),
        });

        if (response.ok) {
          const newBookResponse = await fetch(`${api_uri}/${id}`);
          if (!newBookResponse.ok) {
            throw new Error("Network response was not ok");
          }
          const newBookData = await newBookResponse.json();
          setBook(newBookData);
          setReviewText("");
        } else {
          console.error("Failed to submit review");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
      } finally {
        setReviewing(false);
      }
    } else {
      alert("You must be logged in to submit a review.");
    }
  };
  if (loading || categoryLoading || authorLoading) {
    return <p>Loading...</p>;
  }

  if (error || categoryError || authorError) {
    return <p>Error: {error || categoryError || authorError}</p>;
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
            to={`/authors/${book.data.Book.authorId}`}
            className="no-decoration"
          >
            <span className={styles.categorynamespan}>
              {`${author.data.oneAuthor.firstName} ${author.data.oneAuthor.lastName}`}
            </span>
          </Link>
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

          {token && (
            <div className={styles.favbtn}>
              <button
                onClick={handleAddToFavorite}
                disabled={loadingFavorite || isFavorite}
                className={isFavorite ? styles.favAdded : ""}
              >
                {isFavorite ? "Added to Favorite" : "Add to Favorite"}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.reviewsSection}>
        <h3>Reviews</h3>
        {book.data.Book.reviews && book.data.Book.reviews.length > 0 ? (
          book.data.Book.reviews.map((review) => (
            <div key={review._id} className={styles.reviewCard}>
              <h4 className={styles.reviewerName}>{review.reviewerName}</h4>
              <p className={styles.reviewDate}>
                {new Date(review.createdAt).toLocaleString()}
              </p>
              <p className={styles.reviewComment}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p className={styles.reviewCard}>No reviews yet.</p>
        )}
        {token && (
          <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              required
              className={styles.reviewTextarea}
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={reviewing}
            >
              {reviewing ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        )}
      </div>
      <Homefooter />
    </>
  );
}

export default BooksDetails;
