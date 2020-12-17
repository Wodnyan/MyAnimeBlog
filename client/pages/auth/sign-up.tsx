import Form from "../../components/AuthForms/SignUpForm";
import Typography from "@material-ui/core/Typography";
import styles from "./auth.module.scss";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" component="h1">
        Sign Up!
      </Typography>
      <Form />
    </div>
  );
};
export default SignUp;
