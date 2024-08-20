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
      <nav className="bg-light mt-1 mb-3">
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

        <div className="container-fluid d-flex flex-wrap">
          <a
            className="navbar-brand my-auto text-secondary me-4"
            style={{
              fontSize: "x-large",
              fontWeight: 500,
            }}
            href="#"
          >
            Good Reads
          </a>
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="/"
                style={fontSize}
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" style={fontSize} className="nav-link link-dark px-2">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a href="#" style={fontSize} className="nav-link link-dark px-2">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a href="#" style={fontSize} className="nav-link link-dark px-2">
                Authors
              </a>
            </li>
          </ul>

          <div className="me-auto my-auto  p-2">
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
          <ul className="nav">
            <li className="nav-item">
              <a href="#" style={fontSize} className="nav-link link-dark px-2">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#" style={fontSize} className="nav-link link-dark px-2">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Homeheader;
