import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext'; // Importamos el contexto del carrito

const NavBar = () => {
  const { cartItems, getCartTotal } = useContext(CartContext); // Accedemos a los productos y total del carrito

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand: Nombre de la tienda */}
        <Navbar.Brand href="/">iStore</Navbar.Brand>

        {/* Toggle para dispositivos móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Listado de categorías clickeables */}
            <Nav.Link href="/iPhone">iPhone</Nav.Link>
            <Nav.Link href="/iPad">iPad</Nav.Link>
            <Nav.Link href="/airPods">airPods</Nav.Link>
          </Nav>

          {/* Widget del carrito */}
          <CartWidget cartItems={cartItems.length} total={getCartTotal()} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

