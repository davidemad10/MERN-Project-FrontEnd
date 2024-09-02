import { useState, useEffect } from "react";

const useUser = (userId) => {
  const api_uri = "https://goodreadfdm.vercel.app/users";
  const [userq, setUserq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const response = await fetch(`${api_uri}/${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setUserq(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { userq, loading, error };
};

export default useUser;
