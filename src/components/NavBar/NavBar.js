import React from 'react';
import { FaSteam } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className='brandSvg'><Link to="/"><FaSteam></FaSteam></Link></div>
      <h1 className="tituloNav">Venta de juegos digitales</h1>
      <div className='divMenu'>
        <ul className="menuNav">
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/contact"><button>Contacto</button></Link></li>
          <li><Link to="/:Gama Baja"><button>Gama Baja</button></Link></li>
          <li><Link to="/:Gama Media"><button>Gama Media</button></Link></li>
          <li><Link to="/:Gama Alta"><button>Gama Alta</button></Link></li>
        </ul>
      </div>  
      <CartWidget/>
    </nav>
  )
}

export default NavBar


