import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import styles from "./Forms.module.scss";
import LockIcon from "@material-ui/icons/Lock";
import { ChangeEvent } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Email from "@material-ui/icons/Email";
import AccountCircle from "@material-ui/icons/AccountCircle";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<Props> = ({ value, onChange }) => {
  const [visible, setVisible] = useState(false);
  return (
    <FormControl className={styles.inputContainer}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
        id="password"
        value={value}
        onChange={onChange}
        type={visible ? "text" : "password"}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment
            position="end"
            className="cursor-pointer"
            onClick={() => setVisible((prev) => !prev)}
          >
            {visible ? <VisibilityOff /> : <Visibility />}
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export const EmailInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormControl className={styles.inputContainer}>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input
        id="email"
        value={value}
        onChange={onChange}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export const UsernameInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormControl className={styles.inputContainer}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input
        id="username"
        value={value}
        onChange={onChange}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
