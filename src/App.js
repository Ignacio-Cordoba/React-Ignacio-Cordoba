import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CardsEcommerce from './componentes/CardsEcommerce/CardsEcommerce'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import ItemCount from './componentes/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="item" element  />
      
    </Routes>

   <ItemListContainer/>
   </BrowserRouter>
    </div>
  );
}

export default App;

