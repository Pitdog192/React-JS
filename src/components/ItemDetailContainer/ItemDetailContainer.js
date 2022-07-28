const ItemDetailContainer = ({ dataDetail }) => {
  const { nombre, precio, detalle, imagen } = dataDetail;
  return (
    <div className="detailContainer">
      <h3>{nombre}</h3>
      <img src={imagen} alt="Imagen de detalle" />
      <p>{detalle}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default ItemDetailContainer;
