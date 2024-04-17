import Folder from "../components/Folder";

export default function Folders() {

    return(
        <>
            <h1>Pakker vi tilbyder</h1>
            <div className="folders">
                <Folder 
                title="Pakke 1 - Billedeoptimering"
                folderdescrib="I denne pakke går vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side"
                
                />

                <Folder 
                title="Pakke 2 - Designoptimering"
                folderdescrib="I denne pakke går vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side"
                />

                <Folder 
                title="Pakke 3 - Rebranding"
                folderdescrib="I denne pakke går vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side"
                style={{ backgroundColor: '#806044' }}
                /> 
            </div>
        </>
    )
}