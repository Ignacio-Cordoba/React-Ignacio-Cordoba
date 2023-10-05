import { useState } from "react"
import info from "./productos.json"
import { useEffect } from "react"
import pedirProductos from "./PedirProductos";
import ItemList from "./ItemList";



const ItemListContainer=({})=>{
const[productos,setProductos]= useState([])



useEffect(() => {
    pedirProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 
  
  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer

