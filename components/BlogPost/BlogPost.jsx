import ImageNext from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import styles from "./BlogPost.module.css";
import images from "@/public/assets";

function BlogPost({ blog }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ImageNext
          src={blog.image || images.contact.src}
          alt={images.contact.alt}
          fill
        />
      </div>

      <div className={styles.texts}>
        <span className={styles.title}>{blog.title}</span>
        <span className={styles.desc}>{blog.desc}</span>

        <div className={styles.footer}>
          <Link href={`/blog/${blog._id}`} className={styles.read__more}>
            READ MORE
          </Link>
          <i className={styles.date__post}>
            {dayjs(blog.createdAt).format("DD/MM/YYYY") ||
              dayjs(new Date()).format("DD/MM/YYYY")}
          </i>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
