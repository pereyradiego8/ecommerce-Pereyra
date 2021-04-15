import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <h2>Lista de productos</h2>
              <ItemListContainer />
            </Route>

            <Route path="/category/:categoryId">
              <h2>Item List con Categoria</h2>
              <ItemListContainer />
            </Route>

            <Route path="/item/:itemId">
              <h2>Item Detail</h2>
              <ItemDetailContainer></ItemDetailContainer>
            </Route>

            <Route path="/cart">
              <h2>Carrito de compras</h2>
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;