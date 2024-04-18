import { useEffect } from 'react';
import noImg from "../assets/noimg.png";
import folderarrow from "../assets/folderpilned.svg";
import Stortlogo from "../components/Stortlogo";
import Centertekst from "../components/Centertekst";
import Folderdescribtion from "../components/Folderdescribtion";
import Beforeandafter from "../components/Beforeandafter";

export default function About() {

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
        <Stortlogo />
        
        <div className="leftTekst">
            <h2 className="leftTekst">Hvem er Evergreen</h2>
            <p className="leftTekst">
                Evergreen er meget mere end et webbureau. Vi er fortalere for bæredygtighed og æstetik. Vores mission er at skabe fængende webgrafiske løsninger, der ikke kun imponerer, men også belyser vigtigheden af bæredygtighed. Vi tror på at oplyse og skabe opmærksomhed om klimakonsekvenserne, som internettet skaber.
                <br /> <br />
                Vi arbejder ud fra et bæredygtigheds-codex og stræber efter at skabe brugervenlige og visuelt appellerende webløsninger med fokus på at minimere CO2-aftrykket. Hos Evergreen handler det om at udvikle løsninger, der ikke går på kompromis med brugervenlighed eller æstetik. Vi tror på, at bæredygtighed ikke behøver være kedeligt. 
                <br /> <br />
                Vores værdier - oplysning, skabe opmærksomhed og ærlighed - er fundamentale for vores arbejde. Vi stræber efter gennemsigtighed i alt, hvad vi gør, og vi vil gerne vise, at webgrafiske løsninger kan være både smukke og funktionelle samtidig med at de er bæredygtige.
                <br /> <br />
                Evergreens formål er at være et bevis på, at bæredygtige webdesigns kan være lige så smukke og effektive som konventionelle løsninger. Hos os er bæredygtighed en æstetisk og funktionel fordel, ikke en hindring.
                </p>
        </div>


        <div className="leftTekst">
            <h2 className="leftTekst">Hvad er bæredygtigt webdesign? og hvorfor er det vigtigt</h2>
            <p className="leftTekst">
                Bæredygtigt webdesign er en tilgang til at udvikle og vedligeholde hjemmesider, der tager hensyn til miljømæssige, sociale og økonomiske faktorer. Dette indebærer at minimere den miljømæssige påvirkning af websider ved at reducere CO2-udledning, energiforbrug og ressourceforbrug.
                <br /><br />
                Bæredygtigt webdesign er vigtigt af flere grunde. For det første har internettet en betydelig miljøpåvirkning på grund af datacentre, servere og elektroniske enheder, der bruges til at hoste og tilgå websider. Ved at implementere bæredygtige praksisser kan vi reducere denne påvirkning og bidrage til at bevare naturressourcer og mindske klimaforandringer.
                <br /><br />
                Derudover kan bæredygtigt webdesign forbedre brugeroplevelsen og ydeevnen på hjemmesider. Ved at optimere indlæsningstider, reducere unødvendige ressourcer og sikre en intuitiv navigation kan brugere få en bedre oplevelse, hvilket kan føre til øget tilfredshed, længere besøgstider og højere konverteringsrater.
                <br /> <br />
                Endelig er bæredygtigt webdesign også vigtigt fra et brand- og omdømmeperspektiv. Virksomheder, der viser et engagement i bæredygtighed, kan tiltrække og fastholde kunder, der værdsætter miljøvenlige praksisser. Det kan også differentiere virksomhederne i et konkurrencepræget marked og styrke deres position som samfundsansvarlige aktører.
            </p>
        </div>
        
        <Centertekst overskrift="Guide til optimering" brodtekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


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
            image1={noImg}
            alt1="Example alt"
            lagringspladspre="14,07 GB"
            kgwattpre="105 kg/watt"
            image2={noImg}
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
            image1={noImg}
            alt1="Example alt"
            lagringspladspre="17,07 GB"
            kgwattpre="150 kg/watt"
            image2={noImg}
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
            image1={noImg}
            alt1="Example alt"
            lagringspladspre="20,56 GB"
            kgwattpre="289 kg/watt"
            image2={noImg}
            alt2="Example alt2"
            lagringspladspost="482 KB"
            kgwattpost="10 kg/watt"
            />
          </div>
        </div>

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
            image1={noImg}
            alt1="Example alt"
            lagringspladspre="14,07 GB"
            kgwattpre="105 kg/watt"
            image2={noImg}
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
            image1={noImg}
            alt1="Example alt"
            lagringspladspre="17,07 GB"
            kgwattpre="150 kg/watt"
            image2={noImg}
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
            image1={noImg}
            alt1="Example alt"
            lagringspladspre="20,56 GB"
            kgwattpre="289 kg/watt"
            image2={noImg}
            alt2="Example alt2"
            lagringspladspost="482 KB"
            kgwattpost="10 kg/watt"
            />
          </div>
        </div>

        </>
    )
}