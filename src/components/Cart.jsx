import { context } from "../Contexts/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

function Cart() {
    
    const {carrito} = useContext(context);
    const {vaciar} = useContext(context);
    
    
    return (
        <>
            {carrito.map((item) => {
    
                return (
                    
                    <CartItem producto={item.producto} cantidad={item.cantidad} key={item.producto.id}/>
                        
                )
            })}
            <button onClick={vaciar}> VACIAR CARRITO</button>
        </>
    )
}

export default Cart;