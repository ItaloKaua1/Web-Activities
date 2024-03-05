import React from "react";

import './MeusDados2.css'

const MeusDados2 = ({nome, curso, universidade}) => {
    return (
        <div className="div5">
            <h1>Nome Completo: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </div>
    )

}

export default MeusDados2