import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Items from '../../utilities/ItemMock';

const ItemListContainer = ({greeting}) => {

    const [listaProductos, setListaProductos] = useState([]);

    const productPromise = () => new Promise ( (resolve, reject) => {
        setTimeout(()=>{resolve(Items)},2000)
    });

    useEffect(() => {
        const productProm = async () => {
            try {
                const correcto = await productPromise()
                setListaProductos(correcto)
            }
            catch {
                console.log("Error")
            }
        }
        productProm()
    }, [])

    return (
        <div className="contenedorPrincipal">
            <h1 className="titulo"> {greeting} </h1>
            <div className='divProductos'>
                   <ItemList dataProductos={listaProductos} />
            </div>
        </div> 
    )
}

export default ItemListContainer;