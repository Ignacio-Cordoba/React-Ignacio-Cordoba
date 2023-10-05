import React from 'react'
import info from "./productos.json"

const pedirProductos = () => {
    return new Promise((resolve,reject)=>{
        resolve(info)
    })
}

export default pedirProductos