import {useState, useEffect} from "react";
import ItemList from "./ItemList"

const ItemListContainer = (greeting) => {

    function ItemListContainer () {

        const [productos, setProductos] = useState([]);
        useEffect(() => {
            setTimeout(() => {

                setProductos(productos_iniciales);

            }, 2000);
            
        }, []);
        return (
        <ItemList prop={productos}/>
        )
   
};