import BlogPost from "@/components/BlogPost/BlogPost";
import styles from "./Blog.module.css";
import { fetchPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: "Blogs app with next app",
};

async function BlogPage() {
  const blogs = await fetchPosts();

  return (
    <div className={styles.container}>
      {blogs.map((blog) => {
        return (
          <div key={blog._id}>
            <BlogPost blog={blog} />
          </div>
        );
      })}
    </div>
  );
}

export default BlogPage;
