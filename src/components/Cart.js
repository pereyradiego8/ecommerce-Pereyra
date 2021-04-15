import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/cartContext'
export const Cart = () => {

  const {cart,addItem,removeItem,clear,isInCart} = useContext(CartContext)
  return ( 
      <div>
        {
        !cart.length?
        <h2>No hay Items en el carrito <Link to='/'>Ir al Home</Link></h2>
        : (<>
          {cart.map(cartItem =>
            <div key = {cartItem.item.id} >
              <div>Título: {cartItem.item.title}</div>
              <div>Cantidad: {cartItem.quantity}</div>
              <button>Borrar</button>
            </div>)}
            <div>Total:</div>
          </>
        )
        }
        
      </div>
  )
};

export default Cart;