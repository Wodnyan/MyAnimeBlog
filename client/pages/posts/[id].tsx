import { getAllPostIds, getOnePost } from "../../lib/api/posts";
import Avatar from "@material-ui/core/Avatar";
import timestampToHumanReadable from "../../lib/timestampToHuman";

const BlogPost = ({ post }) => {
  return (
    <div>
      <img src={post.banner_image_url} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{timestampToHumanReadable(post.created_at)}</p>
      </div>
      <div>
        <Avatar />
        <h1>Sam Thorogood</h1>
      </div>
      <div>{post.body}</div>
    </div>
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
  const { id } = params;
  const post = await getOnePost(id);
  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
