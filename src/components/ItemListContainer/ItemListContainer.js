import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const ItemListContainer = ({title}) => {
    
    const [listaProductos, setListaProductos] = useState([]);
    const [tituloContainer, setTituloContainer] = useState('');
    const {category} = useParams();

    const fireProducts = async () => {
        const productsCollection = collection(db, 'prods');
        const snapShot = await getDocs(productsCollection);
        const productList = snapShot.docs.map( (doc) => {
            let product = doc.data()    
            product.id = doc.id
            return product
        })
        if(category){
            const categoryFilter = productList.filter((prod)=> prod.categoria === category )
            setTituloContainer(category)
            return categoryFilter
        } else {
            setTituloContainer('Todos los productos')
            return productList
        }
    }

    useEffect(() => {
        fireProducts()
        .then((res) => {
            setListaProductos(res)
        })
        // eslint-disable-next-line
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