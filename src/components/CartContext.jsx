import React, { createContext } from "react"

export const CartContext = createContext (null)

const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const addToCart = (Item, qty) => {


        
            if(cart.some(el => el.id == item.id)){
                
                
                let index = cart.findIndex(el => el.id == item.id)
                let product = cart[index]
                product.qty =product.qty + qty;

                 const newCart = [...cart];
                 newCart.splice( index, 1, product )

                 setCart ([ ...newCart]);

               
             }else {
                  setCart([... cart, product])
             }  
          }
    }

    const deleteCartById = (id) => {
                let index = newCart.findIndex(el => el.id ==id);
        
        
                const newCart = [...cart];
                newCart.splice( index, 1, product );

                setCart ([...newCart])
    }

    const deleteCart = () => {
        setCart([])
    } 

    return(
        <CartContext.Provider value={{cart, setCar, addToCart}}>
            {props.children}

        </CartContext.Provider>
    )

}

export default CartProvider;