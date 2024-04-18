import Centertekst from "../components/Centertekst"
import Leasbtn from "../components/Leasbtn"




export default function Homepage() {

    return (
        <>
        <Centertekst overskrift="Velkommen til Evergreen" brodtekst="Lille velkomst tekst, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <Centertekst overskrift="Hvem er Evergreen" brodtekst="Hvad er vores mission og vission, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <Leasbtn link="Der hvor du gerne vil hen med linket" />

        
        </>
    )
}
