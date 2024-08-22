import Homefooter from "./Homefooter";
import Homeheader from "./Homeheader";
import { useEffect, useState } from "react";
import styles from "../styles/BookList.module.css";
import { Link } from "react-router-dom";
function Categories() {
  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setcategories(data.data.categories);
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
        {categories.map((category) => (
          <div className={styles.row} key={category._id}>
            <div className={styles.card}>
              <Link
                to={`/categories/${category._id}`}
                className="no-decoration"
              >
                <img src={category.image}></img>
                <h2>{category.categoryName}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Homefooter />
    </>
  );
}

export default Categories;
