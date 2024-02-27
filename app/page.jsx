import ImageNext from "next/image";

import styles from "./home.module.css";
import Button from "@/components/Button/Button";
import images, { imagesGif } from "@/public/assets";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.section__left}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>

        <span className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          laudantium optio earum natus illo dolorem velit soluta qui totam,
          magni ab veniam voluptas tempora quidem dicta a ipsum nisi sequi!
        </span>

        <div className={styles.buttons}>
          <Button primary large borderRadius>
            Learn more
          </Button>
          <Button danger large borderRadius>
            Contact
          </Button>
        </div>

        <div className={styles.brands}>
          <ImageNext src={images.brands.src} alt={images.brands.alt} fill />
        </div>
      </div>
      <div className={styles.section__right}>
        <div className={styles.image__gift}>
          <ImageNext src={imagesGif.hero.src} alt={imagesGif.hero.alt} fill />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
