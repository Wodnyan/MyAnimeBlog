import Post from "../../components/Post/Post";
import { Post as PostType } from "../../types";
import { getAllPostIds, getOnePost } from "../../lib/api/posts";

const BlogPost = ({ post }) => {
  return <Post post={post} />;
};

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await getOnePost(id);
  const post = {
    id: res.id,
    createdAt: res.created_at,
    title: res.title,
    description: res.description,
    body: res.body,
    author: res.author || "Test",
    bannerImgUrl: res.banner_image_url,
    teaserImgUrl: res.teaser_image_url,
  };
  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
