import Card from "../components/Cards";
import noImg from "../assets/noimg.png";
import Leasbtn from "../components/Leasbtn";
import Folderdescribtion from "../components/Folderdescribtion";
import Beforeandafter from "../components/Beforeandafter";
import Centertekst from "../components/Centertekst";

export default function Products() {

    return (
        <>

      <Centertekst overskrift="Produkter vi tilbyder" brodtekst="Vores tjenester omfatter billedeoptimering for hurtigere indlæsning, designoptimering for et tiltalende og brugervenligt udseende, samt rebranding for at forny og differentiere dit brand på markedet" />    
    
    <h3 className="centerTekst">Example Component</h3>
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