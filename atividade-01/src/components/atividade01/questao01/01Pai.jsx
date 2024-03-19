import React from "react";

import Filho from "./01Filho";

const Pai = () => {
    return (
        <div>
            <Filho altura={1.8} peso={90} />
            <Filho altura={1.75} peso={65} />
            <Filho altura={1.95} peso={64} />
        </div>
    )
}   

export default Pai