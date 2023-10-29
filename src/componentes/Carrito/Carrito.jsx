import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import "./carrito.css"

export const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

  return (
    <div>
      <h1 className='h1-carrito'>Carrito</h1>

      {
        carrito.map((prod) => (
          <div className='div-carrito' key={prod.id}>
            <p> <img className="imagen-producto" src={prod.imagen} alt={prod.title} /></p>
            <h2 className='nombre-carrito'>{prod.nombre}</h2>
            <p className='p-carrito'>Precio unidad: {prod.precio}</p>
            <p className='p-carrito'>Precio Total: {prod.precio * prod.quantity}</p>
            <p className='p-carrito'>Cant:{prod.quantity}</p>
          </div> 
        ))
      } 
    
    
    {carrito.length > 0 ?
<>
      <h3 className='h3-carrito'>Total Cantidad: ${precioTotal()}</h3>
      <button className='button-carrito' onClick={vaciarCarrito}>Vaciar:</button>
      <Link className='link-carrito' to="/Chekout">Finalizar Compra</Link>
      </> : <h2 className='h2-carrito'>El carrito esta vacio</h2>
      
      }
   

    </div>
  )
}
