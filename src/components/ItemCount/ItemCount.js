import React, { useState, useContext, useEffect } from 'react';
import Items from "../../utilities/ItemMock";
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({idParam, itemQuantity, dataProd}) => {

    //USO DEL CONTEXTO
    const { addProductCart, setPrecioTotalCarrito, precioTotalCarrito } = useContext(CartContext);

    // eslint-disable-next-line eqeqeq
    const parametroBoton = Items.find(el => idParam == el.id);
    const [contador, setContador] = useState(1);
    const [precioTotal, setPrecioTotal] = useState(precio);
    const [stockProducto, setStockProducto] = useState();
    
    useEffect(() => {
        setStockProducto(stock)
    }, []);

    console.log("Stock del producto:", stockProducto)

    const addStock = () => {
        if(stock > contador ) {
            setContador(contador + 1);
            setPrecioTotal(precioTotal + precio);
        }
    };

    const removeStock = () => {
        if(stock >= contador && contador > 1){
            setContador(contador - 1);
            setPrecioTotal(precioTotal - precio);
        }
    };
    
    const precioCarritoTotal = precio * contador;

    const {nombre, imagen, id, categoria, stock, precio} = dataProd;

    //INFORMACION QUE SE LE ENVIA AL CARRITO
    const productoDelCarrito = {
        nombre,
        precio,
        imagen,
        id,
        categoria,
        contador,
        precioCarritoTotal,
        precioTotal,
        stock
    }


    //FUNCION PARA AÑADIR PRODUCTOS AL CARRITO Y ASIGNAR LA CANTIDAD DE PRODUCTOS
    const onAdd = (producto) => {
        itemQuantity(producto.contador)
        if(producto.stock >= producto.contador){
            setStockProducto(producto.stock - producto.contador)
            console.log("stock del producto luego del onadd", stockProducto)
            addProductCart(producto)
            setPrecioTotalCarrito(precioTotalCarrito + producto.precioTotal)
        } else{
            console.log("No hay mas stock")
        }
    };

    return (
        <div className='contenedorTotal'>
            <div className="contenedorBotones">
                <button onClick={removeStock}>-</button>
                <p>Agregar:{contador}</p>
                <button onClick={addStock}>+</button>
            </div>
            <p>Total: ${precioTotal}</p>
            <button onClick={() => onAdd(productoDelCarrito)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount