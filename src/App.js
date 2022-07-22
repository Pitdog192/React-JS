import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './Estilos/App.scss';

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a la tienda" />
    </>
  );
}

export default App;
