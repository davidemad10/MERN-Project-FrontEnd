import { useEffect, useState } from "react";
import "../styles/HomeBooksection.css";

function GetBooks({ data }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`https://goodreadfdm.vercel.app/books/${data.trim()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data.data.books);
      })
      .catch((error) => {
        return console.log("Error: ", error);
      });
  });
  return (
    <>
      <div className="searchedbooks">
        {books.length > 0 ? (
          books.map((book, index) => {
            <div className="searchedbookcard flex-direction-row">
              book.image ? <img src={book.image} /> :{" "}
              <img src="" alt={book.title} />
            </div>;
          })
        ) : (
          <p className="mb-4">No books have been found</p>
        )}
      </div>
    </>
  );
}

export default GetBooks;
