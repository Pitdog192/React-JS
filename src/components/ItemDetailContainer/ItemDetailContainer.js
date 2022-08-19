import ItemDetail from "../ItemDetail/ItemDetail";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [paramItem, setParamItem] = useState({});
  const {id} = useParams();

    const getProduct = async () => {
      const getdoc = doc(db, 'prods', id)  
      const docSnapshot = await getDoc(getdoc)
      let producto = docSnapshot.data()
      producto.id = docSnapshot.id
      return producto
    }

  useEffect(() => {
    getProduct()
    .then((resp)=>{
      setParamItem(resp)
    })
    // eslint-disable-next-line
  }, [id])

  return (
      <>
        <ItemDetail detailItem={paramItem}/>
      </>
  );
};

export default ItemDetailContainer;
