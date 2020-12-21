import "../styles/global.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>MAB</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
