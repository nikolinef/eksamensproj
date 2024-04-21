import React from "react";

function Costumerrequest() {
    return(
        <>
        <form className="costumerrequest">
            <label htmlFor="name">Navn/firmanavn:</label>
            <br />
            <input type="text" 
            name="navn"
            placeholder="Navn/firmanavn" required/>
            <br />
            <br />
            <label htmlFor="name">Mobilnummer:</label>
            <br />
            <input type="number" 
            name="mobilnummer"
            placeholder="Mobilnummer" required/>
            <br />
            <br />
            <label htmlFor="name">E-mail:</label>
            <br />
            <input type="email" 
            name="email"
            placeholder="E-mail" required/>
            <br />
            <br />
            <label htmlFor="name">Besked:</label>
            <br />
            <textarea type="text" 
            name="besked"
            placeholder="Forespørgsel til mødetidspunkt, dato og evt. sted" required/>
            <br />
            <button type="submit" className="subBtn">Send</button>
        </form>
        </>
    );
}
export default Costumerrequest;