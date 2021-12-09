import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


const Nav = () => {

    return(
        <nav>
            <ul className="nav__lista">
                <li className="nav__item">
                    <Link to={"/"}>
                        <img src="Multimedia/iconos/home.svg" className="nav__icono" alt="icono inicio"></img>
                    </Link>
                </li>
                <li className="nav__item">
                    <input type="text" id="buscadorIndex" name="Buscador" placeholder="Buscar" className="nav__buscador"></input>
                </li>
               
                <CartWidget/>
                <li className="nav__item">
                    <a href="pages/registrarse.html">
                        <img src="Multimedia/iconos/user.svg" className="nav__icono" alt="icono usuario"></img> 
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;