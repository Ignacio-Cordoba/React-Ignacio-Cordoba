
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc} from "firebase/firestore"
import {db} from "../firebase/config"
import "./chekout.css"
export default function Chekout() {
    
    const [pedidoId, setPedidoId ]= useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const{ register, handleSubmit} = useForm()

    const comprar= (info)=>{
        const pedido={
            cliente: info,
            productos: carrito,
            total: precioTotal()

        }
        console.log(pedido)

        const pedidosRef= collection(db,"pedidos")
        addDoc(pedidosRef,pedido)
        .then((doc)=>{
            setPedidoId(doc.id)
            vaciarCarrito()
        })



      }

      if (pedidoId){
        return(
            <div className="container"><h1>Muchas gracias por tu compra</h1>
            <p className='chekout-p'>Tu numero de pedido es: {pedidoId}</p></div>
        )
      }
  return (
    <div>
<div className='container-chekout'>
      <form className='form-chekout' onSubmit={handleSubmit(comprar)}>
        <h1 className='h1-chekout'>Finalizar Compra</h1>
        <input className='nombre-chekout' type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
        <input className='email-chekout' type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
        <input className='telefono-chekout' type="telefono" placeholder="Ingresa tu telefono"  {...register("telefono")}/>
        <button className='button-chekout' type="submit">Enviar</button>
      </form>
    </div>
        
    </div>
  )
}
