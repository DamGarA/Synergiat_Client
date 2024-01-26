import './App.css'
import ListaUsuarios from './Usuarios/ListaUsuarios'
import AgregarUsuario from './Usuarios/AgregarUsuario'
import EditarUsuario from './Usuarios/EditarUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>Prueba tecnica - Synergiat</h1>
      <h2>CRUD de usuarios</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>}></Route>
          <Route path='/agregar-usuario' element={<AgregarUsuario/>}></Route>
          <Route path='/editar-usuario' element={<EditarUsuario/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
