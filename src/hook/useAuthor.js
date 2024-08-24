import { useState, useEffect } from "react";

const useAuthor = (authorId) => {
  const api_uri = "http://localhost:5000/authors";
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authorId) return;

    const fetchAuthor = async () => {
      try {
        const response = await fetch(`${api_uri}/${authorId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAuthor(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [authorId]);

  return { author, loading, error };
};

export default useAuthor;
