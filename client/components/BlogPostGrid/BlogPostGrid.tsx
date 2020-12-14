import Card from "../Card/Card";
import { Post } from "../../types";
import styles from "./BlogPostGrid.module.scss";

interface Props {
  posts: [] | Post[];
}

const BlogPostGrid: React.FC<Props> = ({ posts }) => {
  return (
    <section className={styles.gridContainer}>
      {(posts as Post[]).map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          createdAt={post.createdAt}
          bannerUrl={post.bannerImgUrl}
          description={post.description}
          author={post.author}
        />
      ))}
    </section>
  );
};

export default BlogPostGrid;
