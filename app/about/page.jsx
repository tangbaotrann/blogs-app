import ImageNext from "next/image";

import styles from "./about.module.css";
import images from "@/public/assets";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.section__left}>
        <h1 className={styles.title}>About Agency</h1>

        <div className={styles.sub__title}>
          <h1>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
        </div>

        <div className={styles.desc}>
          <span>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </span>
        </div>

        <div className={styles.figures}>
          <div>
            <h1 className={styles.number}>10 K+</h1>
            <span className={styles.text}>Year of experience</span>
          </div>
          <div>
            <h1 className={styles.number}>250 K+</h1>
            <span className={styles.text}>People reached</span>
          </div>
          <div>
            <h1 className={styles.number}>12 K+</h1>
            <span className={styles.text}>Services and plugins</span>
          </div>
        </div>
      </div>

      <div className={styles.section__right}>
        <div className={styles.image}>
          <ImageNext src={images.about.src} alt={images.about.alt} fill />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
