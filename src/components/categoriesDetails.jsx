import Homefooter from "./Homefooter";
import Homeheader from "./Homeheader";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bookListStyles from "../styles/BookList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "./slider";

function CategoriesDetails() {
  const { id } = useParams();
  const api_uri = "http://localhost:5000/categories";
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${api_uri}/${id}/books`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data.data.books);
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

  if (!books) {
    return <p>No book found.</p>;
  }

  return (
    <>
      <Homeheader />
      <div className={bookListStyles.book_list}>
        {books.map((book) => (
          <div className={bookListStyles.row} key={book._id}>
            <div className={bookListStyles.card}>
              <Link to={`/books/${book._id}`} className="no-decoration">
                <img src={book.image}></img>
                <h2>{book.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Homefooter />
    </>
  );
}

export default CategoriesDetails;
