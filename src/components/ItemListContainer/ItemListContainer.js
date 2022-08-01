import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'; 


const ItemListContainer = ({title, data}) => {
    const {category} = useParams();
    console.log(category);

    const [listaProductos, setListaProductos] = useState([]);

    const productPromise = () => new Promise ((resolve) => {
        setTimeout(()=>{resolve(data)},2000)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

    return (
        <div className="contenedorPrincipal">
            <h1 className="titulo"> {title} </h1>
            <div className='divProductos'>
                <ItemList dataProductos={listaProductos} />
            </div>
        </div> 
    )
}

export default ItemListContainer;