import logo from './assets/logo-dev.jpg';
import './App.css';
import logoCarrito from './assets/carrito.png'

function App() {
  return (
    <div className="App">  
      <header class="header">
        <div class="container logo-nav-container">
            <img src={logo} alt="logo"></img>
            <nav class="navigation">
                <ul>
                    <li><a href="#">CATEGORIA 1</a></li>
                    <li><a href="#">CATEGORIA 2</a></li>
                    <li><a href="#">CATEGORIA 3</a></li>
                    <li><img id='carrito' src={logoCarrito} alt="logoCarrito"></img></li>
                </ul>
            </nav>
        </div>
    </header>
    </div>
  );
}

export default App;
