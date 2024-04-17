import React from "react";
import folderpil from "../assets/folderpilned.svg";
import Beandafter from "./Beandafter";

function Folder({title, folderdescrib}){
return (
    <div className="onefolder">
        <div className="folderheadline">
            <h2>{title}</h2>
            <img src={folderpil} className="folderarrow" alt="Pil" />
        </div>
        <div className="foldercontent">
            <p>{folderdescrib}</p>
            <h3>Knap</h3>
            <Beandafter
            />
        </div>
    </div>


)

}
export default Folder;
