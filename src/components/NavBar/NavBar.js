import React from 'react';
import { useContext } from 'react';
import { FaSteam } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from "../../Context/CartContext";

const NavBar = () => {
  const categorias = ["Gama Baja", "Gama Media", "Gama Alta"];
  const { totalProductos } = useContext(CartContext);
  return (
    <nav className="navBar">
      <div className='brandSvg'><Link to="/"><FaSteam></FaSteam></Link></div>
      <h1 className="tituloNav">Venta de PC armadas</h1>
      <div className='divMenu'>
        <ul className="menuNav">
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/contact"><button>Contacto</button></Link></li>
          <li><Link to="/products"><button>Productos</button></Link></li>
          {categorias.map((el, index) => <li key={index}><Link to={`/products/${el}`}><button>{`${el}`}</button></Link></li>)}
        </ul>
      </div>  
      {totalProductos > 0 ? <CartWidget/> : <></>}
    </nav>
  )
}

export default NavBar


