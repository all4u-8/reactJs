import React, { useState, useContext } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'; 
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, removeFromCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product, quantity);
  };

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Precio: ${product.price}</Card.Text>

        {/* Input para seleccionar la cantidad */}
        <Form.Group>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </Form.Group>

        {/* Botones para agregar y restar del carrito */}
        <div className="mt-2">
        <Button variant="btn btn-outline-primary" onClick={handleAddToCart} className="agregarCarrito">+
        </Button>
        <Button variant="btn btn-outline-secondary" onClick={handleRemoveFromCart} className="quitarCarrito">-
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
