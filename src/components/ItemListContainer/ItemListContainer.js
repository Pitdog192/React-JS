import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Items from '../../utilities/ItemMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title}) => {
    
    const [listaProductos, setListaProductos] = useState([]);
    const [tituloContainer, setTituloContainer] = useState('');
    const {category} = useParams();


    const productPromise = () => new Promise ((resolve) => {
        setTimeout(()=>{
            if(category){
                const categoryFilter = Items.filter((itm) => itm.categoria === category );
                setTituloContainer(category);
                resolve(categoryFilter)
            } else {
                setTituloContainer('Todos los productos');
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
                <ItemList dataProductos={listaProductos} categoryTitle={tituloContainer}/>
            </div>
        </div> 
    )
}

export default ItemListContainer;