import Link from "next/link";
import ImageNext from "next/image";

import styles from "./PostDetail.module.css";
import images, { icons } from "@/public/assets";

function PostDetail() {
  return (
    <>
      <div className={styles.back__blog}>
        <div className={styles.back__icon}>
          <Link href="/blog">
            <ImageNext src={icons.back.src} alt={icons.back.alt} fill />
          </Link>
        </div>
        Back
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <ImageNext src={images.about.src} alt={images.about.alt} fill />
        </div>

        <div className={styles.section__right}>
          <h1 className={styles.title}>Title</h1>

          <div className={styles.info}>
            <div className={styles.avatar}>
              <ImageNext
                src={images.noAvatar.src}
                alt={images.noAvatar.alt}
                fill
              />
            </div>

            <div className={styles.title__name}>
              <h3 className={styles.author}>Author</h3>
              <span className={styles.username}>Terr</span>
            </div>

            <div className={styles.title__published}>
              <h3 className={styles.author}>Published</h3>
              <span className={styles.username}>22/22/2022</span>
            </div>
          </div>

          <span>desc....</span>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
