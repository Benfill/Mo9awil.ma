import { Outlet } from "react-router-dom";
import Header from "../../components/front_office/Navbar.jsx";
import Footer from "../../components/front_office/Footer.jsx";

const Layout = () => {
  return (
    <div className="App relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
