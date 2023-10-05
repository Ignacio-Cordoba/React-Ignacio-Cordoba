import ItemCount from "../ItemCount/ItemCount";




const ItemList = ({productos}) => {
    return(
        <div  className="divprincipal-producto">
            {productos.length > 0 &&
        productos.map((producto , index) => {
          return (
            
            <div className="div-producto" key={index}>
            <header>
            <h2 className="nombre-producto">{producto.nombre}</h2>
            </header>
            <picture>
            <img className="imagen-producto" src={producto.imagen} alt={producto.title} />
            </picture>
            <footer>
            <p className="precio-producto">{producto.precio}</p>
            <p className="stock-producto">{producto.stock}</p>
            <ItemCount/>
            </footer>
          </div>
          );
        })}
        </div>
    )
}

export default ItemList


