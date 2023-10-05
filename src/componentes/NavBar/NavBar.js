import ItemListContainer from "../ItemListContainer/ItemListContainer"
import CartWidget from "./CartWidget/CartWidget"


const NavBar=()=> {
    return(
        <nav>
            <div className="header-css">
            <h3 className="titulo-ecommerce">
                Titulo
            </h3> 
            <ItemListContainer greeting={'Bienvenido'}/>
            </div>
            <CartWidget/>
            <div className="btn-categoria">
            <button>Ingrese su categoria</button>
            <button>Ingrese su categoria</button>
            <button>Ingrese su categoria</button>
            <button>Ingrese su categoria</button>
            <button>Ingrese su categoria</button>

            </div>
           
        </nav>
    )
}
export default NavBar