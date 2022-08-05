import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({detailItem, idParam}) => {
  const [datos, setDatos] = useState({});
  const [itemQuantity, setItemQuantity] = useState(0);
  
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
        {(itemQuantity > 0 ? <Link to='/cart'><button>Finalizar compra</button></Link> : <ItemCount dataProd={datos} idParam={idParam} itemQuantity={setItemQuantity}/>)}
    </div>
  )
}

export default ItemDetail