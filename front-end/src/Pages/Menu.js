import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Scripts from "../Components/Scripts";
import Menu from "../Components/Menu";

const Menu = () => {
  return (
    <div className="Index">
        <Header />
        <Nav />
        <Menu />
        <Footer />
        <Scripts />
    </div>
  );
};

export default Menu;