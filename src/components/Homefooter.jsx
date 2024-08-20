function Homefooter() {
  return (
    <>
      {/* <footer classNameName="position-absolute bottom-0 start-50 translate-middle-x col-sm-10">
                <ul classNameName="nav justify-content-center border-bottom pb-3 mb-3">
                    <li classNameName="nav-item"><a href="/" classNameName="nav-link px-2 text-body-secondary">Home</a></li>
                    <li classNameName="nav-item"><a href="#" classNameName="nav-link px-2 text-body-secondary">Categories</a></li>
                    <li classNameName="nav-item"><a href="#" classNameName="nav-link px-2 text-body-secondary">Books</a></li>
                    <li classNameName="nav-item"><a href="#" classNameName="nav-link px-2 text-body-secondary">Authors</a></li>
                    <li classNameName="nav-item"><a href="about" classNameName="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p classNameName="text-center text-body-secondary">© 2024 DFM, Inc</p>
            </footer> */}
      <div className="container">
        <footer className="py-5 ">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>COMPANY</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Terms
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>WORK WITH US</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Authors
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Advertise
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Authors & ads blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>CONNECT</h5>
              <ul className="nav flex-row pt-1">
                <li className="nav-item mb-2 mx-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i className="fa-brands fa-xl fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item mb-2 mx-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i className="fa-brands fa-xl fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item mb-2 mx-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i className="fa-brands fa-xl fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item mb-2 mx-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    <i className="fa-brands fa-xl fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="">© 2024 DFM, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Homefooter;
