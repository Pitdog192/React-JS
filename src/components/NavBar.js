import React from 'react';
import { FaSteam } from "react-icons/fa";
import '../Estilos/NavBar.scss';


const NavBar = () => {

  let listaNav = ["Lo más vendido", "Próximamente", "Ofertas", "Novedades"];

  return (
    <nav className="navBar">
      <FaSteam />
      <h1 className="tituloNav">E-Shop</h1>
      <div className='divMenu'>
        <ul className="menuNav">
          {listaNav.map((el, index) => (
            <li key={index}><a href='/'>{el}</a></li>
          ))}
        </ul>
      </div>  
    </nav>
  )
}

export default NavBar


