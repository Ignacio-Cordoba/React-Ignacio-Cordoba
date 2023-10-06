

 export const ItemDetail =({item})=>{
    return(
        <div className="contenedor-item-detail">
            <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>
            <p>{item.categoria}</p>
        </div>
            </div>
        </div>
    )
}