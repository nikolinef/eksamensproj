import Card from "../components/Cards";
import noImg from "../assets/noimg.png";
import Pinefolder from "../components/Pinefolder";

export default function Products() {

    return (
        <>
        <Pinefolder
        folderheadline="Pakke 1 - billedeoptimering"
        fdescribtion="I denne pakke går og vi ind og reducerer storage af billeder og video. Dvs. vi komprimere alle filstørrelserne, så de fylder væsentlig mindre, men stadig bevære kvaliteten. Derudover kan vi også lave en test på billedernes nødvendighed, så vi sikre, at i kun har nødvendige billeder på jeres side"
        />
    
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