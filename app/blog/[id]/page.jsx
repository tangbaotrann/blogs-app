import styles from "./BlogDetail.module.css";
import { getPost } from "@/lib/actions";
import PostDetail from "@/components/BlogPost/PostDetail/PostDetail";

export const generateMetadata = async ({ params }) => {
  const { id } = params;

  const post = await getPost(id);

  return {
    title: post.title,
    description: post.desc,
  };
};

function BlogDetail({ params }) {
  return <PostDetail params={params} />;
}

export default BlogDetail;
