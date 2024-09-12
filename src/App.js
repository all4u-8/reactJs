import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext'; 
import './styles/style.css';

function App() {
  return (
    
    <CartProvider>

 

      <div className="App">
        {/* Barra de navegación */}
        <NavBar />
 
 
        {/* Contenedor de lista de productos con un saludo */}
        <ItemListContainer greeting="Bienvenidos a iStore" />
      </div>
   
    </CartProvider>
  );
}

export default App;
