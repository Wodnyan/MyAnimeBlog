import styles from "./Forms.module.scss";
import { ChangeEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { EmailInput, PasswordInput } from "./Inputs";

interface Inputs {
  password: string;
  email: string;
}

const LoginForm = () => {
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetId = e.currentTarget.id;
    const targetValue = e.currentTarget.value;
    setInputs((prev) => ({
      ...prev,
      [targetId]: targetValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <EmailInput value={inputs.email} onChange={handleChange} />
      <PasswordInput value={inputs.password} onChange={handleChange} />
      <div className={styles.bottom}>
        <Link href="/auth/sign-up">
          <a>Create an account!</a>
        </Link>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
