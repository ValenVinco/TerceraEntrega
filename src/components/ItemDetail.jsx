import Counter from "./Counter"
import { useContext } from "react"
import { context } from "../Contexts/CartContext"

function ItemDetail({producto}) {
    
    const { agregar } = useContext(context)

    const onAdd = (cantidad) => {
        agregar(producto, cantidad);
    }  
    
    return (
        
    )
}

export default ItemDetail
