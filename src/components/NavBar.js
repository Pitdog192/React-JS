import React from 'react';
import { FaSteam } from "react-icons/fa";
import '../Estilos/NavBar.scss';


const NavBar = () => {
  return (
    <div className="navBar">
        <FaSteam />
        <h1 className="tituloNav">NavBar</h1>
        <div className='divMenu'>
          <ul className="menuNav">
            <li><a href='navBar'>Lo más vendido</a></li>
            <li><a href='navBar'>Próximamente</a></li>
            <li><a href='navBar'>Ofertas</a></li>
            <li><a href='navBar'>Novedades</a></li>
          </ul>
        </div>
    </div>
    
  )
}

export default NavBar


