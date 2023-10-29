import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css"
const Item = ({ producto }) => {
    return (
        <div className='container-item'>
        <div className="divprincipal-producto">
            <header>
                <h2 className="nombre-producto">{producto.nombre}</h2>
            </header>
            <picture>
                <img className="imagen-producto" src={producto.imagen} alt={producto.title} />
            </picture>
            <footer>
                <p className="precio-producto">{producto.precio}</p>
                <p className="stock-producto">{"Stock: " + producto.stock}</p>
               <button className='button-producto'><Link className='link-producto' to={`/item/${producto.id}`}>Detalles</Link></button>
            </footer>
        </div>
        </div>
        
    );
};

export default Item;