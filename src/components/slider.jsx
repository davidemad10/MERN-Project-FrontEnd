import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../styles/categoriesDetails.module.css";

function Slider() {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className={`carousel-inner ${styles.carouselInner}`}>
        <div class="carousel-item active">
          <img
            // src="https://res.cloudinary.com/df3w1hm4v/image/upload/v1724326878/2_k15mk3.jpg"
            src="https://celadonbooks.com/wp-content/uploads/2021/09/11-Sports-Images-List-scaled.jpg"
            class="d-block w-100"
            alt="qoute"
          />
        </div>
        <div class="carousel-item">
          <img
            // src="https://quotefancy.com/media/wallpaper/3840x2160/365318-Lisa-See-Quote-Read-a-thousand-books-and-your-words-will-flow-like.jpg"
            src="https://assets.penguinrandomhouse.com/wp-content/uploads/2020/03/17215403/1200x628.jpg"
            class="d-block w-100"
            alt="qoute"
          />
        </div>
        <div class="carousel-item">
          <img
            // src="https://quotefancy.com/media/wallpaper/3840x2160/120287-Will-Smith-Quote-The-keys-to-life-are-running-and-reading.jpg"
            src="https://assets.penguinrandomhouse.com/wp-content/uploads/2020/03/23143031/PRH_SciFi-EscapeReality_1200x628.jpg"
            class="d-block w-100"
            alt="qoute"
          />
        </div>
        <div class="carousel-item">
          <img
            // src="https://quotefancy.com/media/wallpaper/3840x2160/4744474-Orhan-Pamuk-Quote-I-read-a-book-one-day-and-my-whole-life-was.jpg"
            src="https://media.cntraveler.com/photos/65b92505b95d9f34767a031c/master/pass/WWT%20Books%20Winter-2024_00-Lede.jpg"
            class="d-block w-100"
            alt="qoute"
          />
        </div>
        <div class="carousel-item">
          <img
            // src="https://quotefancy.com/media/wallpaper/3840x2160/4686014-Margaret-Atwood-Quote-In-the-end-we-ll-all-become-stories.jpg"
            src="https://assets.penguinrandomhouse.com/wp-content/uploads/2016/01/11104627/21Books-PRH_site_1200x628.jpg"
            class="d-block w-100"
            alt="qoute"
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
