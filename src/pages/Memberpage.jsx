import Folderdescribtion from "../components/Folderdescribtion";
import folderarrow from "../assets/folderpilned.svg";

export default function Memberpage() {

    return (
        <>
        <h1 style={{textAlign: "center"}} >Status</h1>

        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>Nye forespørgsler</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Proin nibh nisl condimentum id venenatis. Elementum tempus egestas sed sed risus pretium quam vulputate. 
            
            Porttitor leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate. Ipsum nunc aliquet bibendum enim."
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Igangværende</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Design beskrivelse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Proin nibh nisl condimentum id venenatis. Elementum tempus egestas sed sed risus pretium quam vulputate. 
            
            Porttitor leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate. Ipsum nunc aliquet bibendum enim."
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Afsluttede kunder</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Rebranding beskrivelse beskrivelse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Proin nibh nisl condimentum id venenatis. Elementum tempus egestas sed sed risus pretium quam vulputate. 
            
            Porttitor leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate. Ipsum nunc aliquet bibendum enim."
            />
          </div>
        </div>

        </>
    )
}