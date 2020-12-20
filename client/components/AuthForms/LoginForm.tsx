import styles from "./Forms.module.scss";
import { ChangeEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { PasswordInput, UsernameEmailInput } from "./Inputs";
import { login } from "../../lib/api/auth";
import { useRouter } from "next/router";

interface Inputs {
  password: string;
  identifier: string;
}

const LoginForm = () => {
  const [inputs, setInputs] = useState<Inputs>({
    identifier: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetId = e.currentTarget.id;
    const targetValue = e.currentTarget.value;
    setInputs((prev) => ({
      ...prev,
      [targetId]: targetValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login(inputs.identifier, inputs.password);
      sessionStorage.setItem("access_token", data.access_token);
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <UsernameEmailInput value={inputs.identifier} onChange={handleChange} />
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
