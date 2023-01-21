import { Fragment } from "react";
import Header from "./components/layout/header/index.jsx";
import Meals from "./components/meals/index.jsx";
import Cart from "./components/cart/index.jsx";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
