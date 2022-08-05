import React, { useState } from 'react';
import Items from "../../utilities/ItemMock";

const ItemCount = ({idParam, itemQuantity}) => {

    // eslint-disable-next-line eqeqeq
    const parametroBoton = Items.find(el => idParam == el.id);
    const {stock, precio} = parametroBoton;
    const [contador, setContador] = useState(1);
    const [precioTotal, setPrecio] = useState(precio);

    const addStock = () => {
        if(stock > contador ) {
            setContador(contador + 1);
            setPrecio(precioTotal + precio)
        }
    };

    const removeStock = () => {
        if(stock >= contador && contador > 1){
            setContador(contador - 1);
            setPrecio(precioTotal - precio)
        }
    };
    
    const onAdd = () => {
        itemQuantity(contador)
    };

    return (
        <div className='contenedorTotal'>
            <div className="contenedorBotones">
                <button onClick={removeStock}>-</button>
                <p>Agregar:{contador}</p>
                <button onClick={addStock}>+</button>
            </div>
            <p>Total: ${precioTotal}</p>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount