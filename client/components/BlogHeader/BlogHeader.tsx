import Typography from "@material-ui/core/Typography";
import styles from "./BlogHeader.module.scss";

export default function BlogHeader() {
  return (
    <header className={styles.header}>
      <Typography variant="h2" component="h1">Blog</Typography>
      <Typography variant="body1" component="p">Our latest news, updates, and stories for weebs by weebs</Typography>
    </header>
  );
}
