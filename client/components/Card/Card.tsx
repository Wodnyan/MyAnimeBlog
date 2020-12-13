import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./Card.module.scss";
import Avatar from "@material-ui/core/Avatar";
import { useRouter } from "next/router";

interface PostInformationProps {
  avatarUrl?: string;
  createdAt: string;
  author: string;
}

interface BlogPostCardProps {
  id: number;
  avatarUrl?: string;
  createdAt: string;
  author: string;
  title: string;
  description: string;
  bannerUrl: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  avatarUrl,
  createdAt,
  author,
  title,
  description,
  bannerUrl,
}) => {
  const router = useRouter();
  const goToBlogPost = () => router.push("/post/" + id);

  return (
    <Card className={styles.card}>
      <CardActionArea onClick={goToBlogPost}>
        <CardMedia className={styles.media} image={bannerUrl} title={title} />
        <CardContent>
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
          <PostInformation
            avatarUrl={avatarUrl}
            createdAt={createdAt}
            author={author}
          />
          <Typography color="textSecondary" variant="body1" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const PostInformation: React.FC<PostInformationProps> = ({
  author,
  createdAt,
  avatarUrl,
}) => {
  return (
    <div className={styles.postInformation}>
      <Avatar alt="avatar" src={avatarUrl} className={styles.avatar} />
      <div>
        <Typography variant="subtitle1" component="div">
          {author}
        </Typography>
        <Typography variant="caption" component="div">
          {createdAt}
        </Typography>
      </div>
    </div>
  );
};

export default BlogPostCard;
