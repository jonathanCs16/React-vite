//Contador

import { useState } from "react";

export const TercerComponente = ({ value }) => {
 
    const [contador, setContador] = useState(value)

    //hook
    const handleClick = () => {
        setContador(contador + 5);
        console.log(value);
    }
    return ( 
    <>
        <h1>Contador</h1>
       <h3>{contador}</h3>
        <button onClick={handleClick}>+</button>
    </>
    );
};


