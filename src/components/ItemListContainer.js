import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () =>  {
  const [items, setItems] = useState ([])
  const {categoryId} = useParams()
      
  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, title:"Mother B365M DSH3", price:12000, pictureUrl:"https://www.computershopping.com.ar/Images/Productos/Grandes/Gigabyte-B365M-DS3H_Foto0g.jpg" },
          { id:2, title:"Intel i5 9400f", price:16500, pictureUrl:"https://static-geektopia.com/storage/geek/products/intel/core-i5-9400f/99a7105bf5fd9e30d4e8de3ce5969e383078a6c0.jpg"},
          { id:3, title:"RAM 8GB DDR4 HyperX", price:7000, pictureUrl:"https://media.kingston.com/hyperx/product/hx-product-memory-fury-ddr4-black-1mod-zm-lg.jpg" },
          { id:4, title:"SSD Gigabyte 240 GB", price:4500, pictureUrl:"https://www.precio-calidad.com.ar/wp-content/uploads/2019/05/GIGABYTE-SSD-240GB-1.jpg" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container">
      Items {categoryId}
      <ItemList items={items}/>
    </div>
  );
}
export default ItemListContainer;