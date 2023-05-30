import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { ProductContext } from "../contexts/ProductContext";

const Item = (props) => {
  const { deleteItem , addItemInCart} = useContext(ProductContext);
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title} (Added {props.adet})</h2>
        <p>$ {props.price.toFixed(2)}</p>
        <button onClick={() => deleteItem(props.id)}>1 ➖</button>
        <button onClick={() => addItemInCart(props.id)}>1 ➕</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
