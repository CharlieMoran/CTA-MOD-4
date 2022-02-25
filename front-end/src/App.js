import CartHeader from './Components/CartHeader';
import CartMain from './Components/CartMain';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from './data';
import { useState } from 'react';
import Nav from './Components/Nav';

function App() {
  const { products } = data;
  /* Cart Hook */
  const [cartItems, setCartItems] = useState([]);
  /* Adding to Cart */
  const onAdd = (product) => {
    const found = cartItems.find((x) => x.id === product.id);
    if (found) {
    /* Update Quantity */
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...found, qty: found.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const found = cartItems.find((x) => x.id === product.id);
    if (found.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...found, qty: found.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
        <Nav />
          <main>
            <div className="App">
              <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<Home />} />
              <Route path="/Menu" element={<Home />} />
              </Routes>
        <CartHeader countCartItems={cartItems.length} />
        <div className="row">
        <CartMain products={products} onAdd={onAdd} />
        <ShoppingCart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
