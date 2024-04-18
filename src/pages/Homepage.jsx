import Centertekst from "../components/Centertekst"
import Leasbtn from "../components/Leasbtn";
import Card from "../components/Cards";
import noImg from "../assets/noimg.png";
import Funfact from "../components/Funfact";




export default function Homepage() {

    return (
        <>
        <Centertekst overskrift="Velkommen til Evergreen" brodtekst="Vi er eksperter i webdesign med fokus på at skabe miljøvenlige hjemmesider, der reducerer CO2-udledningen. Lad os sammen bygge digitale løsninger, der gavner både din virksomhed og vores planet!" />

        <Centertekst overskrift="Hvem er Evergreen" brodtekst="Evergreen forener æstetik med bæredygtighed. Vi skaber fængende webgrafiske løsninger, der oplyser om bæredygtighedens vigtighed. Vores mission er at minimere CO2-aftrykket ved at udvikle brugervenlige og visuelt appellerende webløsninger. Vi tror på ærlighed og gennemsigtighed og viser, at bæredygtige webdesigns kan være både smukke og effektive." />

        <Leasbtn link="/about">Læs mere</Leasbtn>


        <h3 className="underOverskrift">Vores pakker</h3>
        <div className="allcards">
            <Card
            title="Pakke 1"
            image={noImg} // Use noImg as the image prop
            alt="Example Image"
            underTitle="Billedeoptimering"
            paragraph="Tester tester tester."
        />
            <Card
            title="Pakke 2"
            image={noImg}
            alt="Example Image"
            underTitle="Designoptimering"
            paragraph="This is an example paragraph."
        />
            <Card
            title="Pakke 3"
            image={noImg}
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

        <h3 className="underOverskrift">Vores tidliger kunder</h3>
        <div className="allcards">
            <Card
            title="Kunde 1"
            image={noImg} // Use noImg as the image prop
            alt="Example Image"
            underTitle="Billedeoptimering"
            paragraph="Tester tester tester."
        />
            <Card
            title="Kunde 2"
            image={noImg}
            alt="Example Image"
            underTitle="Designoptimering"
            paragraph="This is an example paragraph."
        />
            <Card
            title="Kunde 3"
            image={noImg}
            alt="Example Image"
            underTitle="Rebranding"
            paragraph="This is an example paragraph."
        />
        </div> 
        
        </>
    )
}
