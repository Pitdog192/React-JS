import {FiShoppingCart} from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    
    const {cartProducts, clear, singleDelete, precioTotalCarrito, totalProductos} = useContext(CartContext);

    // //ABRE Y CIERRA EL MODAL DEL CARRITO
    // const openCart = () => {
    //     console.log(cartProducts)
    // }
    
    const borrarCarrito = () => {
        //FUNCION DEL CONTEXTO (CartContext) PARA BORRAR EL CARRITO
        clear()
    } 

    return (
        <div className="divCarrito">
        <p>{totalProductos}</p>
        <FiShoppingCart/>
        {cartProducts.map(producto => {
                return(
                    <div className="cartDiv" key={producto.id}>
                        <h4>{producto.nombre}</h4>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad de productos: {producto.stockUsadoCarrito}</p>
                        <img src={producto.imagen} alt="imagen del producto en el carrito"/>
                        <button onClick={() => singleDelete(producto)}>X</button>
                    </div>
                )
            })}
            <p>Precio total: ${precioTotalCarrito}</p>
            <button onClick={borrarCarrito}>X</button>
        </div>
        
    )
}

export default CartWidget