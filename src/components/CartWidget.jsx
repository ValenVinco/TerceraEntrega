import { useContext } from "react";
import { context } from "../Contexts/CartContext";

const CartWidget = () => {

    const {carrito} = useContext(context);

    console.log(carrito);
    

    return(
        <li className="nav__item" id="cart__widget">
            <img src="Multimedia/iconos/carrito" className="nav__icono" alt="icono carrito"></img>
            <p>{carrito.length}</p>
        </li>
    );
}

export default CartWidget;