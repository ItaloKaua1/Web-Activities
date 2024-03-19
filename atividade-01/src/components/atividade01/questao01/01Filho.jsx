import React from "react";


const Filho = ({altura, peso}) => {
    const calculadoraIMC = (altura, peso) => {
        return peso / (altura*altura)
    }

    const mostrarResultado = (imc)  => {
        if (imc < 18) {
            return <h3>Abaixo do peso!</h3>
        }
        else if (imc > 18 && imc <= 25){
            return <h3>Peso ideal!</h3>
        }
        else {
            return <h3>Acima do peso!</h3>
        }
    }

    const imc = calculadoraIMC(altura, peso)
    const resultado = mostrarResultado(imc)

    return (
        <div>
            <h3>IMC: {imc.toFixed(3)}</h3>
            {resultado}
        </div>
    )

}

export default Filho