import { useState, useEffect } from "react";

const useCategory = (categoryId) => {
  const api_uri = "https://goodreadfdm.vercel.app/categories";
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId) return;

    const fetchCategory = async () => {
      try {
        const response = await fetch(`${api_uri}/${categoryId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategory(data);
        // console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return { category, loading, error };
};

export default useCategory;
