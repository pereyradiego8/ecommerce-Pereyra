import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListConteiner';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Bienvenido</h2>
      <ItemListContainer />
    </div>
  );
}

export default App;