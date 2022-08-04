import Item from '../Item/Item';

const ItemList = ({dataProductos, categoryTitle}) => {

    return (
        <>
            <h1>{categoryTitle}</h1>
            <div className='itemContainer'>
            {dataProductos.map( producto => <Item key={producto.id} data={producto}/>)}
            </div>
        </>
    )
}

export default ItemList