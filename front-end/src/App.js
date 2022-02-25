import CartHeader from './Components/CartHeader';
import CartMain from './Components/CartMain';
import ShoppingCart from './Components/ShoppingCart';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
        <NavBar />
          <main>
            <div className="App">
              <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/:id" element={<Details />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="*" element={<PageNF />} />
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
