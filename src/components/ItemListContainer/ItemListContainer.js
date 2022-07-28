import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Items from '../../utilities/ItemMock';
import ItemDetail from '../../utilities/ItemDetail';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = ({greeting}) => {

    const [listDetail, setListDetail] = useState([]);
    const [listaProductos, setListaProductos] = useState([]);

    const productDetail = () => new Promise ((resolve) => {
        setTimeout(() => {resolve(ItemDetail)}, 2000)
    })

    useEffect(() => {
        const detailProm = async () => {
            try {
                const correcto = await productDetail()
                setListDetail(correcto)
            }
            catch {
                console.log("Error de detalle")
            }
        }
        detailProm();
    },[])

    const productPromise = () => new Promise ((resolve) => {
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
        productProm();
    },[])

    return (
        <div className="contenedorPrincipal">
            <h1 className="titulo"> {greeting} </h1>
            <div className='divProductos'>
                <ItemList dataProductos={listaProductos} />
            </div>
            <div>
                <ItemDetailContainer dataDetail={listDetail}/>
            </div>
        </div> 
    )
}

export default ItemListContainer;