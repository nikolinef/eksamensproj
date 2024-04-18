import Centertekst from "../components/Centertekst"
import Leasbtn from "../components/Leasbtn"
import Card from "../components/Cards";
import noImg from "../assets/noimg.png";
import Funfact from "../components/Funfact";




export default function Homepage() {

    return (
        <>
        <Centertekst overskrift="Velkommen til Evergreen" brodtekst="Lille velkomst tekst, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <Centertekst overskrift="Hvem er Evergreen" brodtekst="Introduction om hvem vi er og hvad vi står for, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

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
        
        </>
    )
}
