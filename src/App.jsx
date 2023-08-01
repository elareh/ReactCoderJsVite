

function App() {
    
  const productos = [
    {id: 1, name: "Roberto", edad:31},
    {id: 2, name: "Mario", edad: 28},
    {id: 3, name: "Carlos", edad:20},
    {id: 4, name: "Martin", edad:50}
  ]

  return (
    <div>
      <h1>Personas</h1>
      <ul>
        {productos.map(producto => {
          return (
            <li key ={producto.id}>
              {producto.name}
            </li>
          )
        })}
      </ul>

      <h1>Personas con menos de 30 anios</h1>
      <ul>
        {productos.filter(producto => producto.edad < 30).map(producto => {
          return (
            <li key ={producto.id}>
              {producto.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
