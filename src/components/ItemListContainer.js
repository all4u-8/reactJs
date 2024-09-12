import React from 'react';
import ProductList from './ProductList';

const ItemListContainer = ({ greeting }) => {
  // Productos hardcodeados de ejemplo
  const products = [
    {
      id: 1,
      name: 'iPhone 16 Pro y \niPhone 16 Pro Max',
      price: 1300000,
      image: 'https://all4u-8.github.io/coder/img/i16.jpeg',
    },
    {
      id: 2,
      name: 'iPhone 16 y \niPhone 16 Plus',
      price: 949990,
      image: 'https://all4u-8.github.io/coder/img/i16h.jpeg',
    },
    {
      id: 3,
      name: 'iPhone 15 y \niPhone 15 Plus',
      price: 829990,
      image: 'https://all4u-8.github.io/coder/img/i15.jpeg',
    },
  ];

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {/* Lista de productos */}
      <ProductList products={products} />
    </div>
  );
};

export default ItemListContainer;
