import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CardsEcommerce from './componentes/CardsEcommerce/CardsEcommerce'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <NavBar/>
   <ItemListContainer/>
    </div>
  );
}

export default App;

