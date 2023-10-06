import { useState } from "react"
import info from "./productos.json"
import { useEffect } from "react"
import pedirProductos from "./PedirProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer=({})=>{
const[productos,setProductos]= useState([])
const categoria=useParams().categoria


useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
        }else{
          setProductos(res);
        }
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [categoria]); 
  
  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer

