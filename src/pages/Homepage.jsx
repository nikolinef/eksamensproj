import Centertekst from "../components/Centertekst"
import Leasbtn from "../components/Leasbtn";
import Card from "../components/Cards";
import Funfact from "../components/Funfact";
import Carousel from "../components/Carousel";
import ECO from "../components/ECOgrader";
import forsideeksempel1 from "../assets/forsidefoereksempel1.jpg";
import forsideeksempel2 from "../assets/forsideeftereksempel2.jpg";
import forsideeksempel3 from "../assets/forsideeftereksempel3.jpg";




export default function Homepage() {

    return (
        
        <>

        <div className="baggrund">

        <div className="velkomst">
            <Centertekst overskrift="Velkommen til Evergreen" brodtekst="Vi er eksperter i webdesign med fokus på at skabe miljøvenlige hjemmesider, der reducerer CO2-udledningen. Lad os sammen bygge digitale løsninger, der gavner både din virksomhed og vores planet!" />
        </div>

        <Centertekst overskrift="Hvem er Evergreen" brodtekst="Evergreen forener æstetik med bæredygtighed. Vi skaber fængende webgrafiske løsninger, der oplyser om bæredygtighedens vigtighed. Vores mission er at minimere CO2-aftrykket ved at udvikle brugervenlige og visuelt appellerende webløsninger. Vi tror på ærlighed og gennemsigtighed og viser, at bæredygtige webdesigns kan være både smukke og effektive." />

        <Leasbtn link="/about">Læs mere</Leasbtn>


        <h2 className="underOverskrift">Vores pakker</h2>
        <div className="allcards">
            <Card
            title="Pakke 1"
            image={forsideeksempel1} // 300x200px
            alt="Example Image"
            underTitle="Billedeoptimering"
            paragraph="Tester tester tester."
        />
            <Card
            title="Pakke 2"
            image={forsideeksempel2}
            alt="Example Image"
            underTitle="Designoptimering"
            paragraph="This is an example paragraph."
        />
            <Card
            title="Pakke 3"
            image={forsideeksempel3}
            alt="Example Image"
            underTitle="Rebranding"
            paragraph="This is an example paragraph."
        />
        </div> 

        <Funfact
            overskrift="Fact 1"
            brodtekst="Brødtekst"
        />
        <Leasbtn link="/about">Læs mere</Leasbtn>

        <Funfact
            overskrift="Fact 2"
            brodtekst="Brødtekst"
        />
        <Leasbtn link="/about">Læs mere</Leasbtn>

        <h2 className="underOverskrift">Vores tidliger kunder</h2>

        <Carousel />

        <ECO />
        
    </div>
        </>
    )
}
