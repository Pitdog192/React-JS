const Error = ({causa}) => {
  return (
    <>
      {causa ? <h1>Error, Producto no encontrado</h1> : <h1>Error, página no encontrada</h1>}
    </>
  )
}

export default Error