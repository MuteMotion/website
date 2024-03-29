import StarRating from "./StarRating";
import styles from "./CourseHeader.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function CourseHeader({
  courseTitle,
  courseImg,
  alt,
  setIsPaying,
}) {
  const navigate = useNavigate();
  const btnStyle1 = {
    fontSize: "2.5rem",
    textTransform: "uppercase",
    borderColor: "#442C8F",
    borderStyle: "solid",
    borderWidth: "2px",
  };

  function handlePaying() {
    setIsPaying(true);
    navigate("/cart");
  }
  return (
    <>
      <header className={styles.coursesHeader}>
        <div className={styles.rect1}>
          <div className={styles.content}>
            <h1>{courseTitle}</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae perferendis, perspiciatis harum repudiandae, dolor
              mollitia nobis ea velit soluta at possimus dicta non nam
              exercitationem maxime illo facere odit.
            </p>
          </div>
          <StarRating
            maxRating={5}
            size={45}
            hoverEnabled={false}
            defaultRating={5}
          />
          <div className={styles.btns}>
            <Button type="continue" btnStyle={btnStyle1} onClick={handlePaying}>
              Buy Now
            </Button>
            <Button type="overview" btnStyle={btnStyle1}>
              Add To Cart
            </Button>
          </div>
        </div>
        <div className={styles.rect}>
          <img src={courseImg} alt={alt} className={styles.img1}></img>
        </div>
      </header>
    </>
  );
}
