import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  // Función para restar productos del carrito
  const removeFromCart = (product, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map(item => {
        if (item.id === product.id) {
          const newQuantity = item.quantity - quantity;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(item => item !== null);  // Elimina los productos con cantidad 0
    });
  };

  // Calcula el total de productos en el carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
