import { NavLink } from "react-router-dom";

export default function Sidehoved() {

    return(
        <>
        <nav>
        <NavLink to="/"><div className="headerlogo">Forside</div></NavLink>

            <div className="menu">
                <NavLink to="/products" className="NavLink">Produkter</NavLink>
                <NavLink to="/about" className="NavLink">Om Evergreen</NavLink>
                <NavLink to="/contact" className="NavLink">Kontakt</NavLink>
            </div>
        </nav>
        </>
    )
}
