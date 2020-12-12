import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./Card.module.scss";
import Avatar from "@material-ui/core/Avatar";

export default function BlogPostCard() {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image="https://www.tvovermind.com/wp-content/uploads/2018/12/Gabriel-DropOut.jpeg"
          title="Bruh"
        />
        <CardContent>
          <Typography>New Gabriel Dropout season announced</Typography>
          <PostInformation />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export const PostInformation = () => {
  return (
    <div>
      <Avatar
        alt="avatar"
        src="https://avatars1.githubusercontent.com/u/52217740?s=400&u=ef08f5742fa07f01e340728cef3893126c857938&v=4"
      />
      <div></div>
    </div>
  );
};
