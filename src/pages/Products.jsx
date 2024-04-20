import Card from "../components/Cards";
import noImg from "../assets/noimg.png";
import foereksempel1 from "../assets/foereksempel1-min.png";
import foereksempel2 from "../assets/foereksempel2-min.png";
import foereksempel3 from "../assets/foereksempel3-min.png";
import eftereksempel2 from "../assets/eftereksempel2-min.png";
import eftereksempel3 from "../assets/eftereksempel3-min.png";
import folderarrow from "../assets/folderpilned.svg";
import Leasbtn from "../components/Leasbtn";
import Folderdescribtion from "../components/Folderdescribtion";
import Beforeandafter from "../components/Beforeandafter";
import Centertekst from "../components/Centertekst";
import LilleKunde1 from "../assets/LilleKunde1.png";
import LilleKunde2 from "../assets/LilleKunde2.png";
import LilleKunde3 from "../assets/LilleKunde3.png";

export default function Products() {

  useEffect(() => {
    const accordions = document.querySelectorAll(".onefolder");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active");
        });
    });

    // Clean up event listeners when component unmounts
    return () => {
        accordions.forEach(accordion => {
            accordion.removeEventListener("click", () => {
                accordion.classList.toggle("active");
            });
        });
    };

}, []); // Empty dependency array ensures the effect runs only once after initial render


    return (
        <>
    <div className="baggrund">


        <Centertekst overskrift="Pakker vi tilbyder" brodtekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>Pakke 1 - Billedeoptimering</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Proin nibh nisl condimentum id venenatis. Elementum tempus egestas sed sed risus pretium quam vulputate. 
            
            Porttitor leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate. Ipsum nunc aliquet bibendum enim."
            />
            <h3>Knap</h3>
            <Beforeandafter
            image1={foereksempel1}
            alt1="Example alt"
            lagringspladspre="14,07 GB"
            kgwattpre="105 kg/watt"
            image2={foereksempel1}
            alt2="Example alt2"
            lagringspladspost="504 KB"
            kgwattpost="20 kg/watt"
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Pakke 2 - Designoptimering</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Design beskrivelse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Proin nibh nisl condimentum id venenatis. Elementum tempus egestas sed sed risus pretium quam vulputate. 
            
            Porttitor leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate. Ipsum nunc aliquet bibendum enim."
            />
            <h3>Knap</h3>
            <Beforeandafter
            image1={foereksempel3}
            alt1="Example alt"
            lagringspladspre="17,07 GB"
            kgwattpre="150 kg/watt"
            image2={eftereksempel3}
            alt2="Example alt2"
            lagringspladspost="378 KB"
            kgwattpost="17 kg/watt"
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
            <h2>Pakke 3 - Rebranding</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Rebranding beskrivelse beskrivelse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            Proin nibh nisl condimentum id venenatis. Elementum tempus egestas sed sed risus pretium quam vulputate. 
            
            Porttitor leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate. Ipsum nunc aliquet bibendum enim."
            />
            <h3>Knap</h3>
            <Beforeandafter
            image1={foereksempel2}
            alt1="Example alt"
            lagringspladspre="20,56 GB"
            kgwattpre="289 kg/watt"
            image2={eftereksempel2}
            alt2="Example alt2"
            lagringspladspost="482 KB"
            kgwattpost="10 kg/watt"
            />
          </div>
        </div>
    
    <h3 className="centerTekst">Example Component</h3>
    <div className="allcards">
      <Card
        title="Firma Navn 1"
        image={LilleKunde1} 
        alt="Example Image"
        underTitle="Billedeoptimering"
        paragraph="Tester tester tester."
      />
      <Card
        title="Firma Navn 2"
        image={LilleKunde2}
        alt="Example Image"
        underTitle="Designoptimering"
        paragraph="This is an example paragraph."
      />
      <Card
        title="Firma Navn 3"
        image={LilleKunde3}
        alt="Example Image"
        underTitle="Rebranding"
        paragraph="This is an example paragraph."
      />

    </div>

  </div>

        </>
    )
}