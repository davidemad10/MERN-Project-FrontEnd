import "../styles/HomeBooksection.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeAuthorsection() {
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
        setAuthors(data.data.authors); // Updated to reflect author data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="pt-4 ps-5">
        <h6>Featured Author</h6>
        <div className="d-flex w-75 flex-direction-row p-2 justify-content-center    booksection">
          {authors.slice(0, 5).map((author, index) => (
            <div className="bookcard" key={index}>
              <Link to={`/authors/${author._id}`} className="no-decoration">
                <img className="ms-1 bookcardimg" src={author.image} />
                <p className="mt-2 w-75">
                  <small>
                    {author.firstName} {author.lastName}
                  </small>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeAuthorsection;
