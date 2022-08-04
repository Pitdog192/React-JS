import ItemDetail from "../ItemDetail/ItemDetail";
import {useState, useEffect} from 'react';
import Items from "../../utilities/ItemMock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [detailList, setDetailList] = useState([]);
  const [paramItem, setParamItem] = useState({});
  const {id} = useParams();

  const promiseDetail = () => new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Items)
    }, 2000)
  })

  useEffect(() => {
    const asynDetail = async () => {
      try {
        const correcto = await promiseDetail()
        setDetailList(correcto)
      }
      catch{
        console.log("Error: El producto no existe")
      }
    }
    asynDetail();
    // eslint-disable-next-line array-callback-return
    detailList.some((item) => {
      if (item.id === parseInt(id)) {
        setParamItem(item)
        return item
      }
    })
  }, [detailList, id])

  return (
      <>
        <ItemDetail detailItem={paramItem} idParam={id}/>
      </>
  );
};

export default ItemDetailContainer;
