import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarRegular,
} from "@fortawesome/free-solid-svg-icons";

const generateStars = (rating) => {
  const maxStars = 5;
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`full-${i}`}
        size="sm"
        icon={faStar}
        style={{ color: "rgb(255, 215, 0)" }}
      />
    );
  }

  if (halfStar) {
    stars.push(
      <FontAwesomeIcon
        key="half"
        size="sm"
        icon={faStarHalfAlt}
        style={{ color: "rgb(255, 215, 0)" }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`empty-${i}`}
        size="sm"
        icon={faStarRegular}
        style={{ color: "lightgray" }}
      />
    );
  }
  return stars;
};

export default generateStars;
