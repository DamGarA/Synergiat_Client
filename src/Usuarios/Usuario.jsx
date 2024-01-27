import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Usuario ({usuario}) {
  const navigate = useNavigate()

  function borrarUsuario(idDelUsuario){
    axios.delete(`https://zealous-beret-ant.cyclic.app/api/usuario?idUsuario=${idDelUsuario}`)
      .then(res => {
          alert(res.data)
          navigate(0)
      })
      .catch(err => console.log(err))
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Nombre: {usuario.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Email: {usuario.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Telefono: {usuario.telefono}
        </Typography><Typography sx={{ mb: 1.5 }} color="text.secondary">
            ID: {usuario.idUsuario}
        </Typography>
      </CardContent>
      <Link to={`/editar-usuario/${usuario.idUsuario}`}> 
            <Button variant="contained">
                Editar usuario
            </Button>
          </Link>
      <Button variant="contained" color="error" onClick={() => borrarUsuario(usuario.idUsuario)}>Eliminar usuario</Button>
    </Card>
  );
}