import React from "react";

function Beforeandafter({lagringspladspre, kgwattpre, lagringspladspost, kgwattpost}) {
    return(
        <>
        <div className="twocolums">
            <div className="baacolum">
                <h3>Før</h3>
                <img src={image} alt={alt} />
                <p>Lagringsplads: {lagringspladspre}
                <br />
                Energi i kg/watt: {kgwattpre}</p>
            </div>

            <div className="baacolum">
                <h3>Efter</h3>
                <img src={image} alt={alt} />
                <p>Lagringsplads: {lagringspladspost}
                <br />
                Energi i kg/watt: {kgwattpost}</p>
            </div>
        </div>
        </>
    );
}
export default Beforeandafter;