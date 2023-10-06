import { useEffect , useState } from "react"
import { useActionData, useParams } from "react-router-dom"
import { PedirItemPorId } from "../ItemListContainer/PedirProductos"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = ()=>{

    const[item,SetItem]= useState(null)
    const id=useParams().id

    useEffect(()=>{
        PedirItemPorId(Number(id))
        .then((res)=>{
            SetItem(res)
        })
    },[id])
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    );

}




