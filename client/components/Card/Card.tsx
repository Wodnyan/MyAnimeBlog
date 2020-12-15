import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./Card.module.scss";
import { useRouter } from "next/router";
import UserInfo from "../UserInfo/UserInfo";

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
  const goToBlogPost = () => router.push("/posts/" + id);

  return (
    <Card className={styles.card}>
      <CardActionArea onClick={goToBlogPost}>
        <CardMedia className={styles.media} image={bannerUrl} title={title} />
        <CardContent>
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
          <UserInfo
            avatarUrl={avatarUrl}
            createdAt={createdAt}
            author={author}
            card
          />
          <Typography color="textSecondary" variant="body1" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogPostCard;
