import BlogHeader from "../components/BlogHeader/BlogHeader";
import Header from "../components/Header/Header";
import BlogPostGrid from "../components/BlogPostGrid/BlogPostGrid";
import { Post } from "../types";
import { getAllPosts } from "../lib/api/posts";

interface Props {
  posts: Post[] | [];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <BlogHeader />
      <BlogPostGrid posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await getAllPosts();
  const posts = res.map((post: any) => {
    return {
      id: post.id,
      createdAt: post.created_at,
      title: post.title,
      description: post.description,
      body: post.body,
      author: post.author || "Test",
      bannerImgUrl: post.banner_image_url,
      teaserImgUrl: post.teaser_image_url,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
