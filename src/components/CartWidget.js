import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItems, total }) => {
  return (
    <div className="cart-widget" style={{ display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={24} />
      <span 
        style={{
          backgroundColor: 'red', 
          color: 'white', 
          borderRadius: '50%', 
          padding: '2px 8px', 
          marginLeft: '8px'
        }}>
        {cartItems}
      </span>
      <span style={{ marginLeft: '10px', color: 'white' }}>
        Total: ${total.toFixed(2)}
      </span>
    </div>
  );
};

export default CartWidget;
