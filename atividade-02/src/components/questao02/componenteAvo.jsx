import React from "react";
import { Filho } from './componenteFilho';
import { Contador } from './contadorContexto';
import { Imagem } from './imagem';
import style from './componenteAvo.module.css';

export function Avo() {
    const numero = 1;

    return (
        <div className={style.avo}>
        <h1>Avo</h1>
        <Contador.Provider value={numero}>
            <Imagem id={numero} />
            <Filho />
        </Contador.Provider>
        </div>
    );
}

export default Avo;
