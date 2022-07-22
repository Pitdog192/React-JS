import React from 'react';
import Producto from './Productos/Producto'

const ItemListContainer = ({greeting}) => {

    const primerProd = {
        imagen: "https://medias.musimundo.com/medias/00509005-145501-145501-01-145501-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0ODM3NnxpbWFnZS9qcGVnfGgxNS9oMmYvMTAzODE1NjIxMTgxNzQvMDA1MDkwMDUtMTQ1NTAxLTE0NTUwMV8wMS0xNDU1MDFfMDEuanBnX3NpemU1MTV8ZWQ2MmNhYTRlYzQ2OGZkNDIwNWExOTZhYmQ2NTE4MjE3M2EwMjM3NzFkYzk5NjZlZWRiZTQ0Y2JjZmYzN2RmZQ",
        nombre: "PC GAMER VIEWSONIC",
        precio: 120000,
        stock: 5
    };
    const segundoProd = {
        imagen: "https://bangho.vtexassets.com/arquivos/ids/161153-1200-auto?v=637926313586370000&width=1200&height=auto&aspect=true",
        nombre: "PC GAMER GM 220T I5 RTX 3060",
        precio: 419999,
        stock:2
    }

    return (
        <div className="contenedorPrincipal">
            <h1 className="titulo"> {greeting} </h1>
            <div className='divProductos'>
                <Producto data={primerProd} />
                <Producto data={segundoProd} />
            </div>
        </div> 
    )
}

export default ItemListContainer;