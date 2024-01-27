import React, { useEffect, useState } from "react";
import Usuario from "./Usuario";
import axios from "axios";
import { Box } from "@mui/material";

function ListaUsuarios () {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        axios.get('https://zealous-beret-ant.cyclic.app/api/usuario/lista-usuarios')
        .then(res => {
            setUsuarios(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const estiloFila = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px', 
    };

    return (
        <Box>
            <Box sx={estiloFila}>
            {usuarios.map(usuario => {
                return (
                    <div key={usuario.nombre}>
                        <Usuario usuario={usuario}/>
                    </div>
                )
            })}
            </Box>
        </Box>
    )
}

export default ListaUsuarios