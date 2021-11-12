import { useContext } from "react";
import { CartContext } from "./CartContext";

const CarWidget = () => {

const CartContext = useContext(CartContext);
cons {cart} = cartContext



    return(
        
        <img src="./public/multimedia/Carrito.svg" alt="carrito" className="icono" ></img>
        
         <div clasName="qty-display">{cart.length}</div>
    );
}

export default CarWidget