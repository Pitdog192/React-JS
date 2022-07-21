import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="contenedorPrincipal">
            <h1 className="titulo"> {greeting} </h1>

        </div> 
    )
}

export default ItemListContainer;