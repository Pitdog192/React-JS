import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
const prodImages = require.context('../../assets', true);

const CartComponent = () => {

    const {cartProducts, totalProductos, precioTotalCarrito, clear, singleDelete} = useContext(CartContext);
    const [formulario, setFormulario] = useState(false);
    const [success, setSuccess] = useState(false);
    const [idOrder, setIdOrder] = useState();
    // eslint-disable-next-line no-unused-vars
    const [datosEnviados, setDatosEnviados] = useState({
        items: cartProducts.map((producto) => {
            return {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio
            }
        }),
        buyer: {},
        total: precioTotalCarrito
    })

    const [datosFormulario, setDatosFormulario] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const borrarCarrito = () => {
        //FUNCION DEL CONTEXTO (CartContext) PARA BORRAR EL CARRITO
        setFormulario(false)
        clear()
    } 

    const showForm = () => {
        setFormulario(true)
    }

    const handleChange = (e) =>{
        //Setea los datos del formulario por name automaticamente
        setDatosFormulario({...datosFormulario, [e.target.name]: e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...datosEnviados, buyer: datosFormulario})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        // eslint-disable-next-line no-unused-vars
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setIdOrder(orderDoc.id)
        if(orderDoc){
            setSuccess(true)
            setFormulario(false)
            borrarCarrito()
        }
    }

    return (
        <div className="carTotalComponent">
            <p>Total de productos: {totalProductos}</p>
            <div className="carTotal">
            {cartProducts.map(producto => {
                return(
                    <div className="carComponent" key={producto.id}>
                        <h4>{producto.nombre}</h4>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad de productos: {producto.stockUsadoCarrito}</p>
                        <img src={prodImages(`./${producto.imagen}`)} alt="imagen del producto en el carrito"/>
                        <button onClick={() => singleDelete(producto)}>X</button>
                    </div>
                )
            })}
            </div>
            <p>Precio total: ${precioTotalCarrito}</p>
            {totalProductos > 0 ? <><button onClick={borrarCarrito}>Borrar carrito entero</button><button onClick={showForm}>Finalizar compra!!!</button></> : <Link to="/products"><button>Compra algunos productos!</button></Link> }
            {formulario && 
                <div className="divForm">
                    <h2>Complete el formulario para finalizar la compra</h2>
                    <h4>Datos de contacto</h4>
                    <form onSubmit={submitData}>
                        <input onChange={handleChange} type="text" name="name" placeholder="Nombre" value={datosFormulario.name}/>
                        <input onChange={handleChange} type="number" name="phone" placeholder="Telefono" value={datosFormulario.phone}/>
                        <input onChange={handleChange} type="email" name="email" placeholder="Email" value={datosFormulario.email}/>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                }
            {
                success && 
                <>
                    <h2>Orden Generada con éxito</h2>
                    <p>ID de la compra: {idOrder}</p>
                </>
            }
        </div>
    )
}

export default CartComponent