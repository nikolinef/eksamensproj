import React from "react";
import Baacolum from "./Baacolum";

function Beandafter(){
return (
    <>
        <div className="twocolums">
            <Baacolum
            title="Før"
            lagringsplads="15GB"
            kgwatt="104Kg/watt"
            />
            <Baacolum
            title="Efter"
            lagringsplads="405KB"
            kgwatt="20Kg/watt"
            />
        </div>

    </>


)

}
export default Beandafter;