import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import styles from "../styles/user.module.css";
import { Link } from "react-router-dom";

function Registration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      // Replace with your backend registration endpoint
      const response = await axios.post(
        "http://your-backend-url/register",
        user
      );

      if (response.status === 200) {
        // Assuming the backend sends a JWT token on successful registration
        const { token } = response.data;
        localStorage.setItem("token", token); // Store JWT token
        setSubmitted(true);
        setSuccess(
          `User ${user.firstName} ${user.lastName} successfully registered!`
        );
        setErrorMessage("");
      }
    } catch (err) {
      setErrorMessage("Registration failed. Please check your inputs.");
      setSuccess("");
    }
  };

  const successMessage = () => (
    <div className={styles.successMessage}>
      <h1>{success}</h1>
    </div>
  );

  const errorMessage = () => (
    <div className={styles.errorMessage}>
      <h1>{error}</h1>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Welcome To{" "}
          <Link to={"/"} className={styles.link}>
            GoodReads
          </Link>
        </h1>
      </div>
      <div className={styles.messages}>
        {error && errorMessage()}
        {success && successMessage()}
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.regForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>First Name</label>
            <Controller
              name="firstName"
              control={control}
              defaultValue={user.firstName}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  value={user.firstName}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("firstName", e.target.value);
                  }}
                  className={`${styles.formInput} ${
                    errors.firstName ? styles.isInvalid : ""
                  }`}
                />
              )}
            />
            {errors.firstName && (
              <span className={styles.errorMessage}>
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Last Name</label>
            <Controller
              name="lastName"
              control={control}
              defaultValue={user.lastName}
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  value={user.lastName}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("lastName", e.target.value);
                  }}
                  className={`${styles.formInput} ${
                    errors.lastName ? styles.isInvalid : ""
                  }`}
                />
              )}
            />
            {errors.lastName && (
              <span className={styles.errorMessage}>
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <Controller
              name="email"
              control={control}
              defaultValue={user.email}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              }}
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  value={user.email}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("email", e.target.value);
                  }}
                  className={`${styles.formInput} ${
                    errors.email ? styles.isInvalid : ""
                  }`}
                />
              )}
            />
            {errors.email && (
              <span className={styles.errorMessage}>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Password</label>
            <Controller
              name="password"
              control={control}
              defaultValue={user.password}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  value={user.password}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange("password", e.target.value);
                  }}
                  className={`${styles.formInput} ${
                    errors.password ? styles.isInvalid : ""
                  }`}
                />
              )}
            />
            {errors.password && (
              <span className={styles.errorMessage}>
                {errors.password.message}
              </span>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
