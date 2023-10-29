import { useEffect , useState } from "react"
import { useActionData, useParams } from "react-router-dom"
import {doc , getDoc , query , } from "firebase/firestore"
import { ItemDetail } from "./ItemDetail"
import { db } from "../firebase/config"

export const ItemDetailContainer = ()=>{

    const[item,SetItem]= useState(null)
    const id=useParams().id

    useEffect(()=>{
        const docRef = doc(db, "productos",id)
        getDoc(docRef)
        .then ((resp)=>{
            SetItem({...resp.data(), id: resp.id})
        })
       
    },[id])
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    );

}




