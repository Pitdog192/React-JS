import React, { useState } from 'react';

const Botones = ({dataProd}) => {
    const {stock, precio} = dataProd;
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

    return (
        <div className='contenedorTotal'>
            <div className="contenedorBotones">
                <button onClick={removeStock}>-</button>
                <p>Agregar:{contador}</p>
                <button onClick={addStock}>+</button>
            </div>
            <button>Agregar al carrito</button>
            <p>Total: ${precioTotal}</p>
        </div>
    )
}

export default Botones