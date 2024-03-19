import React from "react";

const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h3>Placa-mãe: {nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h3>Memória: {nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h3>Placa de video: {nome}</h3>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

export  {PlacaMae, Memoria, PlacaDeVideo}