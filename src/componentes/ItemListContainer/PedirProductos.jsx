import React from 'react'
import info from "./productos.json"

const pedirProductos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(info)
        },500)
    })
}


export const PedirItemPorId =(id)=>{
    return new Promise ((resolve,reject)=>{
        const item = info.find((el)=> el.id ===id)
        if(item){
            resolve(item)

        }else {
            reject({error: "No se encontro el producto"})
        }
    })
}



export default pedirProductos