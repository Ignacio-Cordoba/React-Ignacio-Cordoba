import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CardsEcommerce from './componentes/CardsEcommerce/CardsEcommerce'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import ItemCount from './componentes/ItemCount/ItemCount';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/> 
      <Routes>
   <Route path='/productos' element={<ItemListContainer/>}/>
  <Route path='/' element={<ItemListContainer />} />
  <Route path='item/:id' element={<ItemDetailContainer/>} />
  <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
</Routes>

   
   </BrowserRouter>
    </div>
  );
}

export default App;

