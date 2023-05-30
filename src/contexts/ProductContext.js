import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const ls = JSON.parse(localStorage.getItem("carts"));
  const [cart, setCart] = useState(ls ? ls : []);
  const [products, setProducts] = useState(data);

  const addItem = (item) => {
    const item2 = {
      ...item,
      adet: 1,
    };
    const bulunanKart = cart.find((v) => v.id == item.id);
    if (bulunanKart) {
      bulunanKart.adet += 1;
      bulunanKart.price = bulunanKart.adet * item.price;
    } else {
      setCart([...cart, item2]);
    }
  };

  const deleteItem = (id) => {
    const deletedCart = [...cart];
    const item = cart.find((v) => v.id == id);
    const index = cart.indexOf(item);
    console.log(item);
    if (item.adet > 1) {
      item.adet--;
      const productPrice = products.find((v) => v.id == id).price;
      item.price = productPrice * item.adet;
      setCart(deletedCart);
    } else {
      deletedCart.splice(index, 1);
      setCart(deletedCart);
    }
  };

  const addItemInCart = (id) => {
    const addedCart = [...cart];
    const bulunanKart = cart.find((v) => v.id == id);
    bulunanKart.adet += 1;
    const productPrice = products.find((v) => v.id == id).price;
    bulunanKart.price = bulunanKart.adet * productPrice;
    setCart(addedCart);
  };

  const productVariables = {
    products,
    setProducts,
    cart,
    setCart,
    addItem,
    deleteItem,
    addItemInCart,
  };

  return (
    <ProductContext.Provider value={productVariables}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
