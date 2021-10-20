const NavBar = () => {
    return(
        <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Quiénes somos</a></li>
            <li class="submenu"><a href="#">Servicios</a><i class="far fa-caret-square-down more"></i><ul>
                <li><a href="#">Servicio A</a></li>
                <li><a href="#">Servicio B</a></li>
                <li><a href="#">Servicio C</a></li>
            </ul></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
    );
}

export default NavBar