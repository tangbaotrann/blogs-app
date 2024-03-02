import Link from "next/link";
import ImageNext from "next/image";
import dayjs from "dayjs";

import styles from "./PostDetail.module.css";
import images, { icons } from "@/public/assets";
import { getPost, getUser } from "@/lib/actions";
import paths from "@/routes/paths";

async function PostDetail({ params }) {
  const { id } = params;

  const post = await getPost(id);
  const user = await getUser(post.userId);

  console.log(user);

  return (
    <>
      <div className={styles.back__blog}>
        <div className={styles.back__icon}>
          <Link href={paths.BLOG_PAGE.url}>
            <ImageNext src={icons.back.src} alt={icons.back.alt} fill />
          </Link>
        </div>
        Back
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <ImageNext
            src={post.image || images.about.src}
            alt={images.about.alt}
            fill
          />
        </div>

        <div className={styles.section__right}>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.info}>
            <div className={styles.avatar}>
              <ImageNext
                src={user.image || images.noAvatar.src}
                alt={images.noAvatar.alt}
                fill
              />
            </div>

            <div className={styles.title__name}>
              <h3 className={styles.author}>Author</h3>
              <span className={styles.username}>{user.username}</span>
            </div>

            <div className={styles.title__published}>
              <h3 className={styles.author}>Published</h3>
              <span className={styles.username}>
                {dayjs(post.createdAt).format("DD/MM/YYYY") ||
                  dayjs(new Date()).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>

          <span>{post.desc}</span>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
