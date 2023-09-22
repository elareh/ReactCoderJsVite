import { useState } from "react";
import CartContext from "./CartContext.js";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      // agregar item a cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateItemQuantity = (id, quantity) => {
    if (quantity > 0) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      // Si la cantidad es 0 o menor, elimina el producto del carrito
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, updateItemQuantity, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;