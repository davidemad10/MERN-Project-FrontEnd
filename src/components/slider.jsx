import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../styles/categoriesDetails.module.css";

function Slider() {
  return (
    // <div
    //   id="carouselExampleAutoplaying"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className={`carousel-inner ${styles.carouselInner}`}>
    //     <div className="carousel-item">
    //       <img
    //         src="../../public/background image/2.jpg"
    //         className="d-block w-100"
    //         alt="quote image"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="../../public/background image/3.jpg"
    //         className="d-block w-100"
    //         alt="qoute image"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="../../public/background image/4.jpg"
    //         className="d-block w-100"
    //         alt="qoute image"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="../../public/background image/5.jpg"
    //         className="d-block w-100"
    //         alt="qoute image"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="../../public/background image/6.jpg"
    //         className="d-block w-100"
    //         alt="qoute image"
    //       />
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleAutoplaying"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleAutoplaying"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className={`carousel-inner ${styles.carouselInner}`}>
        <div class="carousel-item active">
          <img
            src="../../public/background image/2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/background image/3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/background image/4.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/background image/5.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/background image/6.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
