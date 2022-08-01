import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Items from '../utilities/ItemMock';
import { useParams } from "react-router-dom";

const Home = () => {
  const {category} = useParams();
  console.log(category)
  return (
    <>
      <h1>Bienvenido a la tienda</h1>
      <ItemListContainer title={"Productos destacados"} data={Items}/>
    </>
  )
}

export default Home