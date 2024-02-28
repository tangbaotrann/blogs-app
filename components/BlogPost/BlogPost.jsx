import ImageNext from "next/image";
import Link from "next/link";

import styles from "./BlogPost.module.css";
import images from "@/public/assets";

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ImageNext src={images.contact.src} alt={images.contact.alt} fill />
      </div>

      <div className={styles.texts}>
        <span className={styles.title}>Title</span>
        <span className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ipsum recusandae, amet pariatur quis enim excepturi fugit et quos
          rerum illo vitae cupiditate aliquam blanditiis aut hic porro
          exercitationem rem.
        </span>

        <div className={styles.footer}>
          <Link href="/blog/anyid" className={styles.read__more}>
            READ MORE
          </Link>
          <i className={styles.date__post}>22/2/2022</i>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
