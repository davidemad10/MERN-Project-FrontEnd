
function Homefooter() {
    return (
        <>
            <footer className="position-absolute bottom-0 start-50 translate-middle-x col-sm-10">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Categories</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Books</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Authors</a></li>
                    <li className="nav-item"><a href="about" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 DFM, Inc</p>
            </footer>
        </>
    )
}

export default Homefooter;