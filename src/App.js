import "./App.css";
import Items from "./views/items/pages/Items";
import React, { useState } from "react";
import Cart from "./views/cart/pages/Cart";
import FloatingCart from "./shared/FloatingCart";

/*
 * usually router handle here
 */
function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <div className="container">
      <Items />
      {cartIsOpen ? (
        <Cart setCartIsOpen={setCartIsOpen} />
      ) : (
        <FloatingCart setCartIsOpen={setCartIsOpen} />
      )}
    </div>
  );
}

export default App;
