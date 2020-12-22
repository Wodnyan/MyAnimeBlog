import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import styles from "./CreatePostFrom.module.scss";
import Button from "@material-ui/core/Button";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  identifier?: string;
}

interface Post {
  title: string;
  description: string;
  body: string;
  bannerImg: string;
  teaserImg: string;
}

const CreatePostForm = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    description: "",
    body: "",
    bannerImg: "",
    teaserImg: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <SingleLineTextField
            value={post.title}
            label="title"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SingleLineTextField
            value={post.description}
            label="description"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <MultiLineTextField
            value={post.body}
            label="body"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SingleLineTextField
            value={post.teaserImg}
            label="Teaser Image"
            identifier="teaserImg"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SingleLineTextField
            value={post.bannerImg}
            label="Banner Image"
            onChange={handleChange}
            identifier="bannerImg"
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">
        Create New Post
      </Button>
    </form>
  );
};

const MultiLineTextField: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  error,
  identifier,
}) => {
  return (
    <FormControl className={styles.formControl}>
      <TextField
        id={identifier || label}
        value={value}
        onChange={onChange}
        label={label}
        multiline
        fullWidth
        rows={6}
        variant="filled"
      />
      {error && (
        <FormHelperText id="component-error-text">{error}</FormHelperText>
      )}
    </FormControl>
  );
};

const SingleLineTextField: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  error,
  identifier,
}) => {
  return (
    <FormControl className={styles.formControl}>
      <TextField
        id={identifier || label}
        value={value}
        onChange={onChange}
        label={label}
        fullWidth
        variant="filled"
      />
      {error && (
        <FormHelperText id="component-error-text">{error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CreatePostForm;
