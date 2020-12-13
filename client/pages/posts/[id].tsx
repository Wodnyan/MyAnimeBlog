import { getAllPostIds } from "../../lib/api/posts";

const BlogPost = () => {
  return (
    <>
      <h1>what</h1>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      bruh: "bruh",
    },
  };
}

export default BlogPost;
