import ItemDetail from "../ItemDetail/ItemDetail";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Error from "../Error/Error";

const ItemDetailContainer = () => {

  const [paramItem, setParamItem] = useState({});
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");
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
    .catch((resp)=>{
      setError(true)
      setErrorMsg(resp)
    })
    // eslint-disable-next-line
  }, [id])

  return (
      <>  
        {error ? <Error causa={errorMsg}/> : <ItemDetail detailItem={paramItem}/>}
      </>
  );
};

export default ItemDetailContainer;
