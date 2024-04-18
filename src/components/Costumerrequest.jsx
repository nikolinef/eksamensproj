import React from "react";

function Costumerrequest() {
    return(
        <>
        <div className="costumerrequest">
            <label htmlFor="name">Navn/firmanavn:</label>
            <input type="text" 
            name="navn"
            placeholder="Navn/firmanavn"/>

            <label htmlFor="name">Mobilnummer:</label>
            <input type="number" 
            name="mobilnummer"
            placeholder="Mobilnummer"/>

            <label htmlFor="name">E-mail:</label>
            <input type="email" 
            name="email"
            placeholder="E-mail"/>

            <label htmlFor="name">Besked:</label>
            <input type="text" 
            name="besked"
            placeholder="Forespørgsel til mødetidspunkt, dato og evt. sted"/>
            
        </div>
        </>
    );
}
export default Costumerrequest;