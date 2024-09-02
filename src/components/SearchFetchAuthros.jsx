import { useEffect, useState } from "react";
import "../styles/HomeBooksection.css";

function GetAuthors({ data }) {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch(`https://goodreadfdm.vercel.app/authors/${data.trim()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setAuthors(data.data.books);
      })
      .catch((error) => {
        return console.log("Error: ", error);
      });
  });
  return (
    <>
      <div className="searchedauthors">
        {authors.length > 0 ? (
          authors.map((author, index) => {
            <div className="searchedbookcard flex-direction-row" key={index}>
              author.photo ? <img src={author.photo} /> :{" "}
              <img src="" alt={`${author.firstName} ${author.lastName}`} />
            </div>;
          })
        ) : (
          <p className="mb-4">No Authors have been found</p>
        )}
      </div>
    </>
  );
}

export default GetAuthors;
