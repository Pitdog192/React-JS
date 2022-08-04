import Item from '../Item/Item';

const ItemList = ({dataProductos, categoryTitle}) => {

    return (
        <>
        <h1>{categoryTitle}</h1>
            {dataProductos.map( producto => <Item key={producto.id} data={producto}/>)}
        </>
    )
}

export default ItemList