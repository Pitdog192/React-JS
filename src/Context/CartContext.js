import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0);
    
    const addProductCart = (products) => {
        const obtenerProd = cartProducts.find(productoEnCarrito => productoEnCarrito.id === products.id)
        if (!obtenerProd){
            setCartProducts(cartProducts => [...cartProducts, products])
        } else if (products.stock > products.contador) {
            obtenerProd.contador = obtenerProd.contador + products.contador
        }
    }

    const clear = () => setCartProducts([]);

    const singleDelete = (id, precioTotalProducto) => {
        const borraProducto = cartProducts.filter(producto => producto.id !== id);
        setCartProducts(borraProducto);
        if (borraProducto){
            setPrecioTotalCarrito(precioTotalCarrito - precioTotalProducto)
        }
    }  

    const data = {
        cartProducts,
        addProductCart,
        clear,
        singleDelete,
        setPrecioTotalCarrito,
        precioTotalCarrito,
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}