import React, { createContext, useContext, useMemo, useState } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.title === product.title);
      if (existing) {
        return current.map((item) => item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (title, quantity) => {
    setCart((current) => quantity < 1
      ? current.filter((item) => item.title !== title)
      : current.map((item) => item.title === title ? { ...item, quantity } : item));
  };

  const value = useMemo(() => ({
    cart,
    addToCart,
    updateQuantity,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    cartTotal: cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0),
  }), [cart]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return store;
}
