
import Item from "./item";

const ItemList = ({ productos }) => {
    return (
        <div>
            <div className="item-container-list">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div> 
    );
}

export default ItemList;

