import { CartContext } from "./CartContext";

const Item = () => { 

    const CartContext = useContext(CartContext);

    const {cart, addToCart} = CartContext;
    console.log(CartContext)

    const onAdd = (qty) => {
        addToCart(item, qty)
    }
    return(
        <Link to="item/:id">
        <div  className="container">
        <div  className="card">
            <div  className="shoeBackground">
                <div  className="gradients">
                    <div  className="gradient second" color="blue"></div>
                    <div  className="gradient" color="red"></div>
                    <div  className="gradient" color="green"></div>
                    <div  className="gradient" color="orange"></div>
                    <div  className="gradient" color="black"></div>
                </div>
                
            </div>
        </div>
    </div>
    </Link>
        );




}



export default Item