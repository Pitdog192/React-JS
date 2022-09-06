import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import './Estilos/App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartComponent from './components/CartComponent/CartComponent';
import CartProvider from './Context/CartContext';

function App() {

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/React-JS-Arroquigaray' element={<Home />}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Home/:id' element={<ItemDetailContainer/>}/>
          <Route path='/products' element={<ItemListContainer/>}/>
          <Route path='/products/:category' element={<ItemListContainer/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/cart' element={<CartComponent/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App; 