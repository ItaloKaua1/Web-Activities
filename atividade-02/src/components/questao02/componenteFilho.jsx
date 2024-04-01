import React, { useContext } from "react";
import { Neto } from './componenteNeto';
import { Contador } from './contadorContexto';
import { Imagem } from './imagem';

export function Filho() {
    const numero = useContext(Contador);

    return (
        <div>
        <h1>Filho</h1>
        <Imagem id={numero + 1} />
        <Neto />
        </div>
    );
}

export default Filho;
