import Card from "../components/Card/Card";
import BlogHeader from "../components/BlogHeader/BlogHeader";
import Header from "../components/Header/Header";
import { getAllPosts } from "../lib/api/posts";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Header />
      <BlogHeader />
      {posts.map((post: any) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          createdAt={post.created_at}
          bannerUrl={post.bannerUrl}
          description={post.description}
          author={post.author}
        />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
