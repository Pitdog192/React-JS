import Botones from '../Botones/Botones';
import { useState, useEffect} from 'react';

const ItemDetail = ({detailItem, idParam}) => {
  const [datos, setDatos] = useState({});
  
  useEffect(()=>{
    setDatos(detailItem);
  },[detailItem]);
  
  const {nombre, imagen, precio, detalle} = datos;
  return (
    <div className="itemDetail">
        <h3>{nombre}</h3>
        <img src={imagen} alt="Imagen de detalle" />
        <p className='detalleProd'>{detalle}</p>
        <p className='detallePrecio'>Precio: ${precio}</p>
        <Botones dataProd={datos} idParam={idParam}/>
    </div>
  )
}

export default ItemDetail