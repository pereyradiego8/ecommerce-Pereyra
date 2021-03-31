import React, { useState } from 'react'
import {ItemCount} from './ItemCount'
import {Link} from 'react-router-dom'

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const addHandler = (contador) => {
        console.log('Se agregó un Item', contador)
        setCount(contador)
    }
 
    return <>
            <img src={item?.img} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>

            { count === 0 ?
            <ItemCount stock="10" initial="1" onAdd={addHandler} />
                :
            <Link to = '/cart'>
            <button type="button" class="btn btn-success">Terminar mi compra</button>
            </Link>
            }
  </>;
   
  }