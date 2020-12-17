import Form from "../../components/AuthForms/LoginForm";
import Typography from "@material-ui/core/Typography";
import styles from "./auth.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" component="h1">
        Login
      </Typography>
      <Form />
    </div>
  );
};
export default Login;
