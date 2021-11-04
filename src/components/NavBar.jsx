const NavBar = () => {
    return(
        <nav>
                <ul className="nav__links">
                <li><a href="#">Services</a></li>
               <Link to="/category/categoryId"><li><a href="#">Projects</a></li></Link>
                 <li><a href="#">About</a></li>
                </ul>
    </nav>
                

    );
}

export default NavBar