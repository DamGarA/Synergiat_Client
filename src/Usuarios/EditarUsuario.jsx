import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditarUsuario () {
    const params = useParams();
    const navigate = useNavigate()
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    useEffect(() => {
        axios.post('https://zealous-beret-ant.cyclic.app/api/usuario/obtener-usuario-id', {idUsuario: params.idUsuario})
        .then(res => {
            const datosUsuario = res.data[0]
            setNombre(datosUsuario.nombre)
            setEmail(datosUsuario.email)
            setTelefono(datosUsuario.telefono)
        })
        .catch(err => console.log(err))
    }, [])

    function editarUsuario (e) {
        e.preventDefault()
        const usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idUsuario: params.idUsuario
        }

        axios.post('https://zealous-beret-ant.cyclic.app/api/usuario/editar-usuario', usuario)
            .then(res => {
                alert(res.data)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
    <div>
    <h2>Editar usuario - ID: {params.idUsuario}</h2>
    <Box
      component="form"
      onSubmit={editarUsuario}
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
    )
}

export default EditarUsuario