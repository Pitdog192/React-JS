import React from 'react';
import { FaSteam } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const categorias = ["Gama Baja", "Gama Media", "Gama Alta"];
  return (
    <nav className="navBar">
      <div className='brandSvg'><Link to="/"><FaSteam></FaSteam></Link></div>
      <h1 className="tituloNav">Venta de juegos digitales</h1>
      <div className='divMenu'>
        <ul className="menuNav">
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/contact"><button>Contacto</button></Link></li>
          <li><Link to="/products"><button>Productos</button></Link></li>
          {categorias.map((el, index) => <li key={index}><Link to={`/products/${el}`}><button>{`${el}`}</button></Link></li>)}
        </ul>
      </div>  
      <CartWidget/>
    </nav>
  )
}

export default NavBar


