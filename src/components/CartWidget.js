import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/cartContext';

export const CartWidget = () => {
  const {totalItems} = useContext(CartContext)
  
  return <>
      { totalItems? <i>Carrito {totalItems}</i> : null } 
      <FaShoppingCart />
  </>
};

export default CartWidget;