import Item from '../Item/Item';

const ItemList = ({dataProductos}) => {
    return (
        <>
            {dataProductos.map( producto => <Item key={producto.id} data={producto}/>)}
        </>
    )
}

export default ItemList