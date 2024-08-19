import '../styles/Homeheader.css';
import { useRef } from 'react';

function Homeheader() {

    const searchValue = useRef('');

    function handleinput() {
        console.log("Search value: ", searchValue.current.value)
    };

    return (
        <>
            <nav className="bg-light ">
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className="container-fluid d-flex flex-wrap    ">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Categories</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Books</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Authors</a></li>
                    </ul>

                    <div className="me-auto my-auto border rounded ">
                        <input type="text"
                            style={{
                                background: "white",
                                border: 'none',
                                borderRadius: '10px',
                                paddingLeft: '1rem',
                                // paddingTop: '0.1rem',
                                // paddingBottom: '0.1rem',
                                transition: '0.4s ease-in-out',
                                fontWeight: '300'
                            }}
                            className="xx"
                            placeholder="Type to search..."
                            ref={searchValue}
                        />
                        <button className='headersearchicon'
                            onClick={handleinput}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Homeheader;