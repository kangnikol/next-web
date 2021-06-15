import Navbar from "./Navbar";
import About from "./About"
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <About />
      <Footer />
    </div>
  );
};

export default Layout;
