import { NavLink } from "react-router-dom";

export default function Sidehoved() {

    return(
        <>
        <nav>
        <NavLink to="/"><div className="headerlogo">Forside</div></NavLink>

            <div className="menu">
                <NavLink to="/products">Produkter</NavLink>
                <NavLink to="/about">Om os</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
            </div>
        </nav>
        </>
    )
}
