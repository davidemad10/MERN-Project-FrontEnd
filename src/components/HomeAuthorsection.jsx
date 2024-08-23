import "../styles/HomeBooksection.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeAuthorsection() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/authors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setAuthors(data.data.authors);
      })
      .catch((error) => {
        console.log("Error: \n", error);
      });
  }, []);

  return (
    <>
      <div className="pt-4 ps-5">
        <h6>Featured Authors</h6>
        <div className="d-flex w-75 flex-direction-row p-2 justify-content-center booksection">
          {authors.slice(0, 5).map((author, index) => (
            <div className="bookcard" key={index}>
              <Link to={`/authors/${author._id}`} className="no-decoration">
                <img
                  className="ms-1 bookcardimg"
                  src={author.image}
                  alt={`${author.firstName} ${author.lastName}`}
                />
                <p className="mt-2 w-75">
                  <small style={{ color: "black" }}>
                    {`${author.firstName} ${author.lastName}`}
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
