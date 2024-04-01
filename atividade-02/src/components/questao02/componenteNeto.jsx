import React, { useContext } from 'react';
import { Imagem } from './imagem';
import { Contador } from './contadorContexto';

export function Neto() {
    const numero = useContext(Contador);

    return (
        <div>
        <h1>Neto</h1>
        <Imagem id={numero + 2} />
        </div>
    );
}

export default Neto;
