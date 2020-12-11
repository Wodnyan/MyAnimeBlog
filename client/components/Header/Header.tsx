import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import styles from "./Header.module.scss";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Header() {
  return (
    <header className={styles.header}>
      <Typography variant="h5" component="h1">
        MyAnimeBlog
      </Typography>
      <Nav />
      <SearchForm />
      <SignInButton />
    </header>
  );
}

export const Nav = () => {
  const NavListItem = ({ children }) => <li className={styles.navList__item}>{children}</li>;
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <NavListItem>Home</NavListItem>
        <NavListItem>Posts</NavListItem>
      </ul>
    </nav>
  );
};

export const SignInButton = () => (
  <Button className={styles.button}>Sign in</Button>
);

export const SearchForm = () => {
  return (
    <form className={`${styles.searchForm}`}>
      <Input
        placeholder="Search"
        fullWidth={true}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </form>
  );
};
