import React from "react";

import './Temperatura.css'

const Temperatura = () => {

    const celsiusParaFahrenheit = (c) => {
        return (c * 9/5) + 32
    }

    const fahrenheitParaCelsius = (f) => {
        return (f-32) * 5/9
    }

    const kelvin = (k) => {
        const celsius = k - 273.15
        const fahrenheit = celsiusParaFahrenheit(celsius)
        return {celsius, fahrenheit}
    }
    
    const tempCelsius = 32
    const tempFahrenheit = celsiusParaFahrenheit(tempCelsius)
    const tempKelvin = 305

    const resultCelsius = fahrenheitParaCelsius(tempFahrenheit)
    const resultKelvin = kelvin(tempKelvin)

    return (
        <div className="div6">
            <h1>{tempCelsius} Celsius é igual a {tempFahrenheit} Fahrenheit</h1>
            <h1>{tempFahrenheit} Fahrenheit é igual a {resultCelsius} Celsius</h1>
            <h1>{tempKelvin} Kelvin é igual a {resultKelvin.celsius} Celsius e {resultKelvin.fahrenheit} Fahrenheit</h1>
        </div>
    )
}

export default Temperatura