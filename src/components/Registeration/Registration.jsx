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
    avatar: null,
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    if (input.type === "file") {
      setData({ ...data, avatar: input.files[0] });
    } else {
      setData({ ...data, [input.name]: input.value });

      if (input.name === "password") {
        validatePassword(input.value);
      }
    }
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!hasUpperCase) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!hasLowerCase) {
      setPasswordError("Password must contain at least one lowercase letter.");
    } else if (!hasNumber) {
      setPasswordError("Password must contain at least one number.");
    } else if (!hasSpecialChar) {
      setPasswordError("Password must contain at least one special character.");
    } else {
      setPasswordError(""); // Clear error if password is strong
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent form submission if there are errors
    if (passwordError) {
      return;
    }

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
        withCredentials: true,
      });

      // localStorage.setItem("token", res.token);
      setSuccessMessage("Registration successful! Redirecting...");

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
        console.log("Error sending data to server");
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
              <div className={styles.password_container}>
                <input
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙊" : "🙈"}
                </button>
              </div>
              {passwordError && (
                <div className={styles.error_msg}>{passwordError}</div>
              )}
              {/* <input
                type="file"
                name="avatar"
                onChange={handleChange}
                className={styles.input}
              /> */}
              {error && <div className={styles.error_msg}>{error}</div>}
              {successMessage && (
                <div className={styles.success_msg}>{successMessage}</div>
              )}
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
