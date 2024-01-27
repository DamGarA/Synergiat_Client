import ListaUsuarios from './Usuarios/ListaUsuarios'
import AgregarUsuario from './Usuarios/AgregarUsuario'
import EditarUsuario from './Usuarios/EditarUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Componentes/NavBar'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ListaUsuarios/>}></Route>
        <Route path='/agregar-usuario' element={<AgregarUsuario/>}></Route>
        <Route path='/editar-usuario' element={<EditarUsuario/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
