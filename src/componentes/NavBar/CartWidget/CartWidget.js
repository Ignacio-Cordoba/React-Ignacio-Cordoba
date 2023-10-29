import { Link } from 'react-router-dom'
import cart from "./assets/carrito-de-compras.png"
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import "../Navbar.css"


const CartWidget =()=>{

const {cantidadCarrito} = useContext(CartContext)


    return(<div className='cartwidget-css'>
        <Link className='carrito-link' to="/carrito">
          
            <img src={cart}/> <span className='numerito-carrito'>{cantidadCarrito()}</span> 
            
        </Link>
    </div>)
    
}
export default CartWidget