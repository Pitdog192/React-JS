import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
const prodImages = require.context('../../assets', true);

const CartWidget = ({modalProp}) => {
    
    const {cartProducts, clear, singleDelete, precioTotalCarrito} = useContext(CartContext);

    // //ABRE Y CIERRA EL MODAL DEL CARRITO
    // const openCart = () => {
    //     console.log(cartProducts)
    // }
    
    const borrarCarrito = () => {
        //FUNCION DEL CONTEXTO (CartContext) PARA BORRAR EL CARRITO
        clear()
        modalProp(false)
    } 

    const cerrarModal = () => {
        modalProp(false)
    }

    return (
        <div className="divElementosCarrito">
            <button onClick={cerrarModal} className="btnCierreModal">X</button>
            <div className="divCardsCarrito">
                {cartProducts.map(producto => {
                        return(
                            <div className="cartDiv" key={producto.id}>
                                <button onClick={() => singleDelete(producto)} className="btnElProd">X</button>
                                <h3>{producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                <p>Cantidad de productos: {producto.stockUsadoCarrito}</p>
                                <img src={prodImages(`./${producto.imagen}`)} alt="imagen del producto en el carrito"/>
                            </div>
                        )
                    })}
            </div>
            <div className="divBotonesCarrito">        
                <p>Precio total: ${precioTotalCarrito}</p>
                <button onClick={borrarCarrito}>Eliminar todos los productos</button>
                <Link to='/cart'><button onClick={cerrarModal}>Finalizar compra</button></Link>
            </div>        
        </div>
        
    )
}

export default CartWidget