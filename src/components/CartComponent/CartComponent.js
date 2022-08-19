import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
const prodImages = require.context('../../assets', true);

const CartComponent = () => {

    const {cartProducts, totalProductos, precioTotalCarrito, clear, singleDelete} = useContext(CartContext);

    const borrarCarrito = () => {
        //FUNCION DEL CONTEXTO (CartContext) PARA BORRAR EL CARRITO
        clear()
    } 

    return (
        <div className="carTotalComponent">
            <p>Total de productos: {totalProductos}</p>
            <div className="carTotal">
            {cartProducts.map(producto => {
                return(
                    <div className="carComponent" key={producto.id}>
                        <h4>{producto.nombre}</h4>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad de productos: {producto.stockUsadoCarrito}</p>
                        <img src={prodImages(`./${producto.imagen}`)} alt="imagen del producto en el carrito"/>
                        <button onClick={() => singleDelete(producto)}>X</button>
                    </div>
                )
            })}
            </div>
            <p>Precio total: ${precioTotalCarrito}</p>
            {totalProductos > 0 ? <><button onClick={borrarCarrito}>Borrar carrito entero</button><button>Finalizar compra!!!</button></> : <Link to="/products"><button>Compra algunos productos!</button></Link> }
        </div>
    )
}

export default CartComponent