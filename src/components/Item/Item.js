import Botones from '../Botones/Botones';

const Producto = ({data}) => {    
const {imagen, nombre, precio, stock} = data;
  return (
    <div className="cardProduct">
      <img alt="Imagen de producto" src={imagen} />
      <h4>{nombre}</h4>
      <p>${precio}</p>
      <p>Hay {stock} disponibles</p>
      <Botones dataProd={data}/>
    </div>
  );
};

export default Producto;
