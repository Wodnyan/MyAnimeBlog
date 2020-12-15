import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./UserInfo.module.scss";
import toHumanReadable from "../../lib/timestampToHuman";

interface Props {
  avatarUrl?: string;
  createdAt?: string;
  card?: boolean;
  author: string;
}

const UserInfo: React.FC<Props> = ({ card, author, createdAt, avatarUrl }) => {
  return (
    <div className={styles.postInformation}>
      <Avatar alt="avatar" src={avatarUrl} className={styles.avatar} />
      <div>
        <Typography variant="subtitle1" component="div">
          {author}
        </Typography>
        {card && (
          <Typography variant="caption" component="div">
            {toHumanReadable(createdAt)}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
