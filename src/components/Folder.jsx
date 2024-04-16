import React from "react";
import folderpil from "../assets/folderpilned.svg"
import Beandafter from "./beandafter";

function Folder({title, folderdescrib}){
return (
    <>
        <div className="folderheading">
            <h2>{title}</h2>
            <img src={folderpil} alt="Pil" />
        </div>
        <div className="foldercontent">
            <p>{folderdescrib}</p>
            <h3>Knap</h3>
            <Beandafter
            />
        </div>
    </>


)

}
export default Folder;
