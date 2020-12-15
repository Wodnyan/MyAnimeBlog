import timestampToHumanReadable from "../../lib/timestampToHuman";
import styles from "./Post.module.scss";
import UserInfo from "../../components/UserInfo/UserInfo";
import Typography from "@material-ui/core/Typography";
import { Post as PostType } from "../../types";
import Header from "../Header/Header";

interface Props {
  post: PostType;
}
interface PostInfoProps {
  title: string;
  description: string;
  createdAt: string;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <Header />
      <img className={styles.bannerImg} src={post.bannerImgUrl} />
      <div className={styles.post}>
        <section className={styles.postInfo}>
          <PostInfo
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
          />
        </section>
        <section className={styles.userInfo}>
          <UserInfo author={post.author || "Test"} />
        </section>
        <section>{post.body}</section>
      </div>
    </div>
  );
};

const PostInfo: React.FC<PostInfoProps> = ({
  createdAt,
  description,
  title,
}) => {
  return (
    <>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {description}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {timestampToHumanReadable(createdAt)}
      </Typography>
    </>
  );
};

export default Post;
