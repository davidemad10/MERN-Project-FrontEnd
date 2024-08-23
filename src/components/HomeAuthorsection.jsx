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
      <div className='pt-4 ps-5 mb-3'>
        <h6>Featured Author</h6>
        <div className="d-flex w-100 flex-direction-row p-2 justify-content-center    booksection">
          {authors.slice(0, 5).map((author, index) => (
            <div className="bookcard" key={index}>
              <img className="ms-1 bookcardimg w-75"
                src={author.image}
              // src={author.photo.toLowerCase() == 'no photo' ? '' : author.photo}
              // alt={author.photo.toLowerCase() == 'no photo' ? `${author.firstName} ${author.lastName}` : ''}
              />
              <p className="mt-2 w-75 text-center"><small>{author.firstName} {author.lastName}</small></p>
              {/* <p>{author.disc}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeAuthorsection;
