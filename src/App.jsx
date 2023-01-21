import { Fragment, useState } from "react";
import Header from "./components/layout/header/index.jsx";
import Meals from "./components/meals/index.jsx";
import Cart from "./components/cart/index.jsx";
import CartProvider from "./store/CartProvider.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
