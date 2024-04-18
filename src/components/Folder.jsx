import React from "react";
import folderpil from "../assets/folderpilned.svg";
import Beandafter from "./Beandafter";

function Folder(){
return (
    <>
        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
            <div className="folderheadline">
                <h2>Pakke 1 - Billedeoptimering</h2>
                <img src={folderpil} className="folderarrow" alt="Pil" />
            </div>
            <div className="foldercontent">
                <p>I denne pakke går og vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side</p>
                <h3>Knap</h3>
                <Beandafter
                />
            </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
            <div className="folderheadline">
                <h2>Pakke 2 - Designoptimering</h2>
                <img src={folderpil} className="folderarrow" alt="Pil" />
            </div>
            <div className="foldercontent">
                <p>I denne pakke går vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side</p>
                <h3>Knap</h3>
                <Beandafter
                />
            </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
            <div className="folderheadline">
                <h2>Pakke - Rebranding</h2>
                <img src={folderpil} className="folderarrow" alt="Pil" />
            </div>
            <div className="foldercontent">
                <p>I denne pakke går vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side</p>
                <h3>Knap</h3>
                <Beandafter
                />
            </div>
        </div>
    </>
    


)

}
export default Folder;
