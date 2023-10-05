




const ItemList = ({productos}) => {
    return(
        <div >
            {productos.length > 0 &&
        productos.map((producto , index) => {
          return (
            
            <div className="div-producto" key={index}>
              <img className="imagen-producto" src={producto.imagen} alt={producto.title} />
              <h2 className="nombre-producto">{producto.nombre}</h2>
              <p className="precio-producto">{producto.precio}</p>
            </div>
          );
        })}
        </div>
    )
}

export default ItemList


