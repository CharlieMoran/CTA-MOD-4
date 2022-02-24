import axios from "axios";
import Nav from "./Components/Nav"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Scripts from "./Components/Scripts";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => {
          setDays(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul>
      <Footer />
      <Scripts />
    </div>
  );
}

export default App;
