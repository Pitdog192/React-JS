import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0);
    
    const addProductCart = (products) => {
        const obtenerProd = cartProducts.find(productoEnCarrito => productoEnCarrito.id === products.id)
        products.stockUsadoCarrito = 0
        if (!obtenerProd){
            setPrecioTotalCarrito(precioTotalCarrito + products.precioTotal)
            setCartProducts(cartProducts => [...cartProducts, products])
            setTotalProductos(totalProductos + products.contador)
            if (products.stock > 0) {
                setPrecioTotalCarrito(precioTotalCarrito + products.precioTotal)
                setTotalProductos(totalProductos + products.contador)
                products.stockUsadoCarrito += products.contador
                }
            } 
    }

    const clear = () => {
        setCartProducts([]);
        setTotalProductos(totalProductos - totalProductos)
        setPrecioTotalCarrito(precioTotalCarrito - precioTotalCarrito)
    };

    const singleDelete = (productoParaBorrar) => {
        const borraProducto = cartProducts.filter(producto => producto.id !== productoParaBorrar.id);
        if (borraProducto){
            setTotalProductos(totalProductos - productoParaBorrar.contador)
            setPrecioTotalCarrito(precioTotalCarrito - productoParaBorrar.precioTotal)
            productoParaBorrar.stockCarrito = productoParaBorrar.stock
        }
        setCartProducts(borraProducto);
    }  

    const data = {
        cartProducts,
        addProductCart,
        clear,
        singleDelete,
        totalProductos,
        precioTotalCarrito
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}
