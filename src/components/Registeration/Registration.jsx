import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Homeheader from "../Homeheader";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatar: null, // For file upload
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Added state for success message
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    if (input.type === "file") {
      setData({ ...data, avatar: input.files[0] });
    } else {
      setData({ ...data, [input.name]: input.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    try {
      const url = "http://localhost:5000/users/register";
      const { data: res } = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Make sure this is set to include credentials
      });

      localStorage.setItem("token", res.token); // Store JWT token in localStorage
      setSuccessMessage("Registration successful! Redirecting..."); // Set success message

      // Delay navigation by 2 seconds
      setTimeout(() => {
        navigate("/users/login");
      }, 2000);

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log("error to send data to server");
      }
    }
  };

  return (
    <>
      <Homeheader />
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h6>
              <Link to="/" className={styles.link}>
                Good Reads
              </Link>
            </h6>
            <h1>Welcome Back</h1>
            <Link to="/users/login">
              <button type="button" className={styles.white_btn}>
                Login
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <input
                type="file"
                name="avatar"
                onChange={handleChange}
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              {successMessage && <div className={styles.success_msg}>{successMessage}</div>} {/* Success message */}
              <button type="submit" className={styles.green_btn}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
