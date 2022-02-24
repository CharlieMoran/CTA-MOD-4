import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Scripts from "../Components/Scripts";


const Home = () => {
  return (
    <div className="Index">
        <Header />
        <Nav />
      <h2>Welcome to the Banana Shop!</h2>
      <Footer />
      <Scripts />
    </div>
  );
};

export default Home;