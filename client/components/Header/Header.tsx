import { useState, FormEvent, ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import styles from "./Header.module.scss";
import Search from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from "next/link";
import { connect } from "react-redux";
import { addUser } from "../../redux/user/actions";

function Header({ user }) {
  console.log(user);
  return (
    <header className={styles.header}>
      <AppBar position="fixed">
        <ToolBar>
          <Link href="/" passHref>
            <Typography className={styles.homeLink} variant="h5" component="a">
              MyAnimeBlog
            </Typography>
          </Link>
          <SearchForm />
          {user === null ? <SignInButton /> : <CreateNewPost />}
        </ToolBar>
      </AppBar>
    </header>
  );
}

export const CreateNewPost = () => (
  <Link href="/posts/create" passHref>
    <Button color="inherit" className={styles.button}>
      Create new post
    </Button>
  </Link>
);

export const SignInButton = () => (
  <Link href="/auth/login/" passHref>
    <Button color="inherit" className={styles.button}>
      Sign in
    </Button>
  </Link>
);

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={`${styles.searchForm}`}>
      <Input
        placeholder="Search"
        fullWidth
        style={{ color: "#fff" }}
        onChange={handleInputChange}
        value={search}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </form>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state.users };
};

export default connect(mapStateToProps, {
  addUser,
})(Header);
