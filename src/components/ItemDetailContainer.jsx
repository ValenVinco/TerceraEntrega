import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react";
import productos_iniciales from "../productos.json"




function ItemDetailContainer () {
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            setProductos(productos_iniciales);
        }, 2000);
    }, []);
    
    if(productos.length === 0){
        return (
            <div className="itemListContainer">
                <p className="carga"> Loading </p>
            </div>
        );
    } else {
        return (
            <div className="itemDetailContainer">

                <ItemDetail producto={productos[0]}/>

            </div>
        );
    }
}

export default ItemDetailContainer