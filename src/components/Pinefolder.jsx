
function Pinefolder({folderheadline, fdescribtion}) {
    return(
        <>
        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
            <div className="folderheadline">
                <h2>{folderheadline}</h2>
                <img src={folderpil} className="folderarrow" alt="Pil" />
            </div>
            <div className="foldercontent">
                <p>{fdescribtion}</p>
                <h3>Knap</h3>
            </div>
        </div>

        </>

    );
}
export default Pinefolder; 