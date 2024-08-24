import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./syles.module.css";
import Homeheader from "../Homeheader";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/users/login";
      const response = await axios.post(url, data);
      localStorage.setItem("token", response.data.token);

      // Set success message and redirect after 2 seconds
      setSuccessMessage("Login successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000); // 2 seconds delay
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.errorMessage);
      }
    }
  };

  return (
    <>
      <Homeheader />
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
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
              {error && <div className={styles.error_msg}>{error}</div>}
              {successMessage && <div className={styles.success_msg}>{successMessage}</div>} {/* Show success message */}
              <button type="submit" className={styles.green_btn}>
                Login
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h6>
              <Link to="/" className={styles.link}>
                Good Reads
              </Link>
            </h6>
            <h1>New Here!</h1>
            <Link to="/users/register">
              <button type="button" className={styles.white_btn}>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
