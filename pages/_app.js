import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import Layout from "../components/Layout";
// import "../js/cursor";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
