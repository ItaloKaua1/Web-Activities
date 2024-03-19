import React from "react";

const Hero = ({name, img}) => {
    return (
        <div>
            <h2>Hero: {name}</h2>
            <img src={img} alt="Hero" />
        </div>
    )
}

const Enemy = ({name, img}) => {
    return (
        <div>
            <h2>Enemy: {name}</h2>
            <img src=   {img} alt="Enemy" />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name="Hulk" img="/hulk.jpeg"/>
            <Enemy name="Thanos" img="/thanos.jpeg"/>
        </div>
    )
}

const World = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export {Hero, Enemy, Arena, World}