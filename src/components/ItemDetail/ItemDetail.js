import Botones from '../Botones/Botones';
import { useState, useEffect} from 'react';

const ItemDetail = ({detailItem, idParam}) => {
  const [datos, setDatos] = useState({});
  
  useEffect(()=>{
    setDatos(detailItem);
  },[detailItem]);
  
  const {nombre, id, imagen, precio} = datos;
  return (
    <div className="itemDetail">
        <h3>{nombre}</h3>
        <h4>{id}</h4>
        <img src={imagen} alt="Imagen de detalle" />
        <p>Precio: ${precio}</p>
        <Botones dataProd={datos} idParam={idParam}/>
    </div>
  )
}

export default ItemDetail