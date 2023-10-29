import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import ItemCount from './componentes/ItemCount/ItemCount';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import Contacto from './componentes/Contacto/Contacto';
import { useState } from 'react';
import { CartContext, CartProvider } from './componentes/Context/CartContext';
import { Carrito } from './componentes/Carrito/Carrito';
import Chekout from './componentes/Chekout/Chekout';

function App() {

  return (
    <div className="App">
      <CartProvider>

        <BrowserRouter>
          <NavBar /> 
          <Routes>
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='item/:id' element={<ItemDetailContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route  path='/carrito' element={<Carrito />} />
            <Route path='/Chekout' element={<Chekout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
