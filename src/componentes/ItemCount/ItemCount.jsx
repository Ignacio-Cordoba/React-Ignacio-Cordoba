
import { useState } from "react"
import "../NavBar/Navbar.css"
const ItemCount =({item , quantity , Sumar , Restar , Agregar})=>{

return(
  
   <div className="container-contador">
      
   <div className="container-botones-contador">
    <button className="button-restar" onClick={Restar}>-</button>
    <p className="p-contador">{quantity}</p>
    <button className="button-restar" onClick={Sumar}>+</button>
   </div>
   <button className="button agregar" onClick={Agregar}>Agregar al carrito</button>

    
   </div>
)}

export default ItemCount