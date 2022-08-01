import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import './Estilos/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Home/:id' element={<ItemDetailContainer/>}/>
        <Route path='/:category' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 