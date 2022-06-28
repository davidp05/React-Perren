import './App.css';
import Card from './components/card';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">  
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la tienda"/>
      <Card stock={7}/>
    </div>
  );
}

export default App;
