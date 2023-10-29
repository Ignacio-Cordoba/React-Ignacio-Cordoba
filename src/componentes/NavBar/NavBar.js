import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import CartWidget from "./CartWidget/CartWidget"
import "./Navbar.css"

const NavBar=()=> {
    return(
        <nav>
            <div className="header-css">
            <h3 className="titulo-ecommerce">
                CordobaShop<li className="li-navbar"><CartWidget/></li>
                
            </h3> 
            
            </div>
          
            <div className="btn-categoria">
            <ul className="ul-navbar">
            <li className="li-navbar"><Link className="link-navbar" to="/">Inicio</Link></li>
            <li className="li-navbar"><Link className="link-navbar"  to="/productos/Bujias">Bujias</Link></li>
            <li className="li-navbar" ><Link className="link-navbar"  to="/productos/Lamparas">Lamparas</Link></li>
            <li className="li-navbar"><Link  className="link-navbar"  to="/productos/Arranques">Arranques</Link></li>
            <li className="li-navbar"><Link className="link-navbar"  to="/contacto">Contacto</Link></li>
            <li className="li-navbar"><Link className="link-navbar"  to="/carrito">Carrito</Link></li>
            <li className="li-navbar"><Link  className="link-navbar"  to="/Chekout">Chekout</Link></li>
            </ul>

            </div>
           
        </nav>
    )
}
export default NavBar