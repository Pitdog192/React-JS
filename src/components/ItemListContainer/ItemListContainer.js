import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Items from '../../utilities/ItemMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title}) => {
    
    const [listaProductos, setListaProductos] = useState([]);
    const {category} = useParams();

    const productPromise = () => new Promise ((resolve) => {
        setTimeout(()=>{
            if(category){
                const categoryFilter = Items.filter((itm) => itm.categoria === category );
                resolve(categoryFilter)
            } else {
                resolve(Items)
            }
        },2000)
    });

    useEffect(() => {
        const productProm = async () => {
            try {
                const correcto = await productPromise()
                setListaProductos(correcto);   
            }
            catch {
                console.log("Error")
            }
        }
        productProm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[category])

    return (
        <div className="contenedorPrincipal">
            <h1 className="titulo"> {title} </h1>
            <div className='divProductos'>
                <ItemList dataProductos={listaProductos} categoryTitle={category}/>
            </div>
        </div> 
    )
}

export default ItemListContainer;