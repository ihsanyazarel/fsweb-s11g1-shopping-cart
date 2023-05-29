import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const ls = JSON.parse(localStorage.getItem("carts"));
  const [cart, setCart] = useState(ls ? ls : []);
  const [products, setProducts] = useState(data);
  
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const deleteItem = (index) => {
    const deletedCart = [...cart]
    deletedCart.splice(index, 1);
    setCart(deletedCart);
  }

  const productVariables = {
    products,
    setProducts,
    cart,
    setCart,
    addItem,
    deleteItem
  };

  return (
    <ProductContext.Provider value={productVariables}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;