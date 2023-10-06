import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import CartWidget from "./CartWidget/CartWidget"


const NavBar=()=> {
    return(
        <nav>
            <div className="header-css">
            <h3 className="titulo-ecommerce">
                Titulo
            </h3> 
            
            </div>
            <CartWidget/>
            <div className="btn-categoria">
            
            <button><Link className="btn-categoria" to="/">Inicio</Link></button>
            <button><Link to="/productos/bujias">Bujias</Link></button>
            <button><Link to="/productos/lamparas">Lamparas</Link></button>
            <button><Link to="/productos/arranques">Arranques</Link></button>
            

            </div>
           
        </nav>
    )
}
export default NavBar