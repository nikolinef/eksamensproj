import React from "react";

function Baacolum({title, lagringsplads, kgwatt}){
    return (
        <>
            <div className="baacolum">
            <h3>{title}</h3>
            <h3>Billede</h3>
            <p>Lagringsplads: {lagringsplads}
                <br />
                Energi i kg/watt: {kgwatt}
            </p>
            </div>
    
        </>
    
    
    )
} export default Baacolum;