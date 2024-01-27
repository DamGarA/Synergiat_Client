import React, { useEffect, useState } from "react";
import Usuario from "./Usuario";
import axios from "axios";

function ListaUsuarios () {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        axios.get('https://zealous-beret-ant.cyclic.app/api/usuario/lista-usuarios')
        .then(res => {
            console.log(res)
            setUsuarios(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h3>Lista de usuarios</h3>
            {usuarios.map(usuario => {
                return (
                    <div key={usuario.nombre}>
                        <Usuario usuario={usuario}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ListaUsuarios