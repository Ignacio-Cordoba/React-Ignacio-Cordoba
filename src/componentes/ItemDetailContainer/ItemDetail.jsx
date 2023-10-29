import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import "./itemdetail.css"

export const ItemDetail = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const { carrito, Agregar } = useContext(CartContext);
    
    const Restar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const Sumar = () => {
        if (quantity < item.stock) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="contenedor-item-detail">
            <div className="producto-detalle">
                <img className="foto-detalle-producto" src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="nombre-detalle-producto">{item.nombre}</h3>
                    <p className="precio-detalle-producto">${item.precio}</p>
                    <p className="categoria-detalle-producto">categoria: {item.categoria}</p>
                    <p className="contador-detalle-producto">
                        <ItemCount quantity={quantity} Restar={Restar} Sumar={Sumar} Agregar={() => Agregar(item, quantity)} />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
