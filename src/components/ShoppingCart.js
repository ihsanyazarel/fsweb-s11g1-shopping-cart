import React from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";




const ShoppingCart = () => {
  const {cart} = useContext(ProductContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item, i) => (
        <Item key={i} {...item } i={i} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
