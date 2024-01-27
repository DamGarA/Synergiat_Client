import ListaUsuarios from './Usuarios/ListaUsuarios'
import AgregarUsuario from './Usuarios/AgregarUsuario'
import EditarUsuario from './Usuarios/EditarUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Componentes/NavBar'
import Informacion from './Componentes/Informacion'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ListaUsuarios/>}></Route>
        <Route path='/agregar-usuario' element={<AgregarUsuario/>}></Route>
        <Route path='/editar-usuario/:idUsuario' element={<EditarUsuario/>}></Route>
        <Route path='/informacion' element={<Informacion/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
