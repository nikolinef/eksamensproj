import React from "react";

function Beandafter({lagringsplads, kgwatt}){
return (
    <>
        <div className="twocolums">
            <div className="baacolum">
            <h3>Før</h3>
            <h3>Billede</h3>
            <img />
            <p>Lagringsplads: {lagringsplads}
                <br />
                Energi i kg/watt: {kgwatt}
            </p>
            </div>

            <div className="baacolum">
            <h3>Efter</h3>
            <h3>Billede</h3>
            <img />
            <p>Lagringsplads: {lagringsplads}
                <br />
                Energi i kg/watt: {kgwatt}
            </p>
            </div>
            
        </div>

    </>


)

}
export default Beandafter;