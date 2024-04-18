import Centertekst from "../components/Centertekst"
import Leasbtn from "../components/Leasbtn"
import CentertekstBtn from "../components/CentertekstBtn"
import Card from "../components/Cards";
import noImg from "../assets/noimg.png";




export default function Homepage() {

    return (
        <>
        <Centertekst overskrift="Velkommen til Evergreen" brodtekst="Lille velkomst tekst, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <div className="centertekstbtn">
                <CentertekstBtn
                    overskrift="Hvem er Evergreen"
                    brodtekst="Hvad er vores mission og vission, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Leasbtn link="Der hvor du gerne vil hen med linket" />
            </div>

        <h3 className="underOverskrift">Example Component</h3>
        <div className="allcards">
            <Card
            title="Firma Navn 1"
            image={noImg} // Use noImg as the image prop
            alt="Example Image"
            underTitle="Billedeoptimering"
            paragraph="Tester tester tester."
        />
            <Card
            title="Firma Navn 2"
            image={noImg}
            alt="Example Image"
            underTitle="Designoptimering"
            paragraph="This is an example paragraph."
        />
            <Card
            title="Firma Navn 3"
            image={noImg}
            alt="Example Image"
            underTitle="Rebranding"
            paragraph="This is an example paragraph."
        />

        </div>    
        
        </>
    )
}
