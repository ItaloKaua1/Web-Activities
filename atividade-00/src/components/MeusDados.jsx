import React from "react";
import './MeusDados.css';

const MeusDados = () => {
    function MeuComponente(){
        return  <div className="div1">
                    <h1>Nome Completo: Ítalo Kauã Vitor Fernandes</h1>
                    <h1>Curso: Engenharia de Software</h1>
                    <h1>Universidade: Universidade Federal do Ceará - Campus Quixadá</h1>
                </div>
    }

    const MeusDadosArrowReturn = () => {
        return(
            <div className="div2">
                <h1>Nome Completo: Ítalo Kauã Vitor Fernandes</h1>
                <h1>Curso: Engenharia de Software</h1>
                <h1>Universidade: Universidade Federal do Ceará - Campus Quixadá</h1>
            </div>
        )
    }

    return(
        <div>
            <MeuComponente/>
            <MeusDadosArrowReturn/>
        </div>
    )
}

export default MeusDados
