import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import uniquid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AgregarUsuario() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  function AgregarUsuario (e) {
    e.preventDefault()
    const usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idUsuario: uniquid()
    }

    axios.post('https://zealous-beret-ant.cyclic.app/api/usuario/agregar-usuario', usuario)
    .then(res => {
        alert(res.data)
        navigate("/")
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
    <h2>Crea un nuevo usuario</h2>
    <Box
      component="form"
      onSubmit={AgregarUsuario}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="nombre-form"
          label="Nombre"
          value={nombre}
          onChange={(e) => {setNombre(e.target.value)}}
          variant="filled"
        />
        <TextField
          required
          id="email-form"
          label="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          variant="filled"
        />
        <TextField
        required
        id="telefono-form"
        label="Telefono"
        value={telefono}
        onChange={(e) => {setTelefono(e.target.value)}}
        variant="filled"
        />
      </div>

    <Button type="submit">Enviar</Button>
    </Box>
    </div>
      );
}