import React, { createContext, useState, useEffect } from "react";
function base64UrlDecode(base64Url) {
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decodedString = atob(base64);
  return decodeURIComponent(
    decodedString
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
}
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      let userId = null;
      try {
        const [, payload] = token.split(".");
        const decodedPayload = base64UrlDecode(payload);
        const payloadData = JSON.parse(decodedPayload);
        userId = payloadData._id;
        fetchUserData(userId);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
    if (token) {
      // Decode token or fetch user data using the token
      // setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);
  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      setUser(userData.data); // Assuming the data structure from the API
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoggedIn(false);
    }
  };

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
