import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="divprincipal-producto">
            <header>
                <h2 className="nombre-producto">{producto.nombre}</h2>
            </header>
            <picture>
                <img className="imagen-producto" src={producto.imagen} alt={producto.title} />
            </picture>
            <footer>
                <p className="precio-producto">{producto.precio}</p>
                <p className="stock-producto">{producto.stock}</p>
               <button><Link to={`/item/${producto.id}`}>Detalles</Link></button>
            </footer>
        </div>
    );
};

export default Item;