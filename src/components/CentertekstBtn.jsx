
import Leasbtn from "./Leasbtn";

export default function CentertekstBtn({ overskrift, brodtekst }) {
    return (
        <div className="centerTekst">
            <h1>{overskrift}</h1>
            <p>{brodtekst}</p>
            <Leasbtn link="Der hvor du gerne vil hen med linket" />
        </div>
    );
}