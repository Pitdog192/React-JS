import React, { useState, useContext, useEffect} from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({itemQuantity, dataProd}) => {

    //USO DEL CONTEXTO
    const { addProductCart} = useContext(CartContext);
    const {nombre, imagen, id, categoria, precio, stock} = dataProd;
    const [contador, setContador] = useState(1);
    const [precioTotal, setPrecioTotal] = useState(0);


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

    useEffect(() => {
        setPrecioTotal(precio)
    },[precio])

    //INFORMACION QUE SE LE ENVIA AL CARRITO
    const productoDelCarrito = {
        nombre,
        precio,
        imagen,
        id,
        categoria,
        contador,
        precioTotal,
        stock,
    }


    //FUNCION PARA AÑADIR PRODUCTOS AL CARRITO Y ASIGNAR LA CANTIDAD DE PRODUCTOS
    const onAdd = (producto) => {
        itemQuantity(producto.contador)
        addProductCart(producto)
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