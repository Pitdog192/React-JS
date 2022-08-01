import { Link } from 'react-router-dom';

const Item = ({data}) => {    
const {imagen, nombre, precio, stock, id} = data;
  return (
    <Link to={`/Home/${id}`}>
      <div className="cardProduct">
        <img alt="Imagen de producto" src={imagen} />
        <h4>{nombre}</h4>
        <p className='textoPrecio'>${precio}</p>
        <p>{stock} unidades disponibles</p>
      </div>
    </Link>
  );
};

export default Item
