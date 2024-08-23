import "../styles/Homeheader.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Homeheader({ sendData }) {
  const fontSize = { fontSize: "1.1rem" };
  const searchValue = useRef("");

  function handleinput() {
    sendData(searchValue.current.value);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0 mb-0">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-secondary"
            style={{
              fontSize: "x-large",
              fontWeight: 500,
            }}
            to="/"
          >
            Good Reads
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  style={fontSize}
                  className="nav-link link-dark active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Categories"
                  style={fontSize}
                  className="nav-link link-dark"
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/books"
                  style={fontSize}
                  className="nav-link link-dark"
                >
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/authors"
                  style={fontSize}
                  className="nav-link link-dark"
                >
                  Authors
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <input
                type="text"
                style={{
                  background: "white",
                  border: "none",
                  borderRadius: "2px",
                  paddingLeft: "1rem",
                  transition: "0.4s ease-in-out",
                  fontWeight: "300",
                }}
                className="xx"
                placeholder="Type to search..."
                ref={searchValue}
              />
              <button className="headersearchicon" onClick={handleinput}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/users/login"
                  style={fontSize}
                  className="nav-link link-dark"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/users/register"
                  style={fontSize}
                  className="nav-link link-dark"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Homeheader;
