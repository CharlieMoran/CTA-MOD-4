import Footer from "../Components/Footer";
import CartHeader from "../Components/CartHeader";
import Nav from "../Components/Nav";
import CartMain from "../Components/CartMain";

const Home = () => {
  return (
    <div className="Index">
        <CartMain />
        <Nav />
        <CartHeader />
        <Footer />
    </div>
  );
};

export default Home;