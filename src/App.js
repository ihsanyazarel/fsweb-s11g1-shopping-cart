import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductContext } from "./contexts/ProductContext";

function App() {
  const {cart} = useContext(ProductContext)
  useEffect(()=>{
    localStorage.setItem("carts", JSON.stringify(cart))
    console.log(cart)
  }, [cart])

  return (
    <div className="App">
      <Navigation/>

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products/>
        </Route>

        <Route path="/cart">
          <ShoppingCart/>
        </Route>
      </main>
    </div>
  );
}

export default App;
