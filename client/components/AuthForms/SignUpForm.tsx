import styles from "./Forms.module.scss";
import { ChangeEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { EmailInput, PasswordInput, UsernameInput } from "./Inputs";

interface Inputs {
  username: string;
  password: string;
  email: string;
}

const SignUpForm = () => {
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
    username: "",
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
      <UsernameInput value={inputs.username} onChange={handleChange} />
      <EmailInput value={inputs.email} onChange={handleChange} />
      <PasswordInput value={inputs.password} onChange={handleChange} />
      <div className={styles.bottom}>
        <Link href="/auth/login">
          <a>Login!</a>
        </Link>
        <Button type="submit" variant="contained">
          Sign Up!
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
