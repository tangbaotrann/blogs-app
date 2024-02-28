import BlogPost from "@/components/BlogPost/BlogPost";
import styles from "./Blog.module.css";

function BlogPage() {
  return (
    <div className={styles.container}>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  );
}

export default BlogPage;
