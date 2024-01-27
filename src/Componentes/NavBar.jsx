import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           Prueba Tecnica - Synergiat - Damian Garcia Abreu
          </IconButton>
          <Link to='/'>
            <Button color="inherit">
                Inicio
            </Button>
          </Link>
          <Link to='/agregar-usuario'>
            <Button color="inherit">
                Agregar usuario
            </Button>
          </Link>
          <Link to='/informacion'>
            <Button color="inherit">
                Informacion
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}