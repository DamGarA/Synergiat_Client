import React from "react";

function Usuario ({usuario}) {
    return (
        <div>
            <h2>Nombre: {usuario.nombre}</h2>
            <h3>Email: {usuario.email} </h3>
            <h3>Telefono: {usuario.telefono} </h3>
        </div>
    )
}

export default Usuario