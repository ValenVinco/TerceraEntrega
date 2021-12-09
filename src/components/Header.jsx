import {Link} from "react-router-dom"


const Header = () => {

    return(
        <header>
            <div className="header__logo">
                <Link to="index.html"><img src="Multimedia/logo.png" className="logo" alt="logo nike"></img></Link>
            </div>
        </header>
    );
}

export default Header;