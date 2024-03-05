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

    const MeusDadosArrowSemReturn = () => (
        <div className="div3">
            <h1>Nome Completo: Seu Nome Completo</h1>
            <h1>Curso: Seu Curso</h1>
            <h1>Universidade: Sua Universidade</h1>
        </div>
    );

    class MeusDadosClasse extends React.Component {
        render() {
            return (
                <div className="div4">
                    <h1>Nome Completo: Seu Nome Completo</h1>
                    <h1>Curso: Seu Curso</h1>
                    <h1>Universidade: Sua Universidade</h1>
                </div>
            );
        }
    }

    return(
        <div>
            <MeuComponente/>
            <MeusDadosArrowReturn/>
            <MeusDadosArrowSemReturn/>
            <MeusDadosClasse/>
        </div>
    )
}

export default MeusDados
