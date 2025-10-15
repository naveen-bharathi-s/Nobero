import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((p) => p.id === item.id && p.size === item.size);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size ? { ...p, qty: p.qty + 1 } : p
        );
      }else{
         return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  // Remove product
  const removeFromCart = (item) => {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === item.id && p.size === item.size ? { ...p, qty: Math.max(p.qty - 1, 0) } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);