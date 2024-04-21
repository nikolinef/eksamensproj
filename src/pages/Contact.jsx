import Centertekst from '../components/Centertekst';
import Folderdescribtion from "../components/Folderdescribtion";
import folderarrow from "../assets/folderpilned.svg";
import Vejledningstid from '../components/Vejledningstid';
import Costumerrequest from '../components/Costumerrequest';

export default function Contact() {

    return (
        <>
<div className="baggrund">

        <Centertekst overskrift="Kontakt Evergreen" brodtekst="Her kan du sende en forespørgsel på et møde eller stille os andre spørgsmål. Husk at vi har en FAQ, hvor du sandsynligvis kan finde svar på dine spørgsmål, ellers er du velkommen til at kontakte os på mail eller telefon" />


        <div className="onefolder" style={{backgroundColor: "#B9C186", color: "#412F26"}}>
          <div className="folderheadline">
            <h2>Book et møde</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Send en forespørgsel på et mødetidspunkt, dato og evt. sted. Vi tager rundt i hele landet for at hjælpe virksomheder. Du vil modtage en bekræftelse på at vi har fået din besked. Herefter kontakter vi dig/din virksomhed for at aftale nærmere."
            />
            <Folderdescribtion
            fdescribtion="Til mødet vil vi sammen snakke om de forskellige optimeringsmuligheder og behov, din virksomhed har, og vil fastlægge et forløb der passer jeres kalender."
            />
            <Costumerrequest />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#6A6F4C", color: "#EDE1D2"}}>
        <div className="folderheadline">
            <h2>FAQ</h2>
            <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Vi har samlet svarene på de hyppigste spørgsmål vi får:"
            />
            <Folderdescribtion
            fdescribtion="Har du stadig ikke fået svar, er du selvfølgelig velkommen til at kontakte os. Se træffetider under Rådgivning og vejledning"
            />
          </div>
        </div>

        <div className="onefolder" style={{backgroundColor: "#806044", color: "#EDE1D2"}}>
          <div className="folderheadline">
              <h2>Rådgivning & vejledning</h2>
              <img src={folderarrow} alt="Pil" className="folderarrow" />
          </div>

          <div className="foldercontent">
            <Folderdescribtion
            fdescribtion="Har du spørgsmål til fx vores implementeringsguide for CO2 reducerende tiltag, eller kan du alligevel ikke finde svar i vores FAQ, er du velkommen til at kontakte os."
            />
            <Vejledningstid />

          </div>
        </div>
        
      </div>
        </>
    )
}