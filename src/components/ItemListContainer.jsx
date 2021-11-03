import {useState, useEffect} from "react";

import ItemList from "./ItemList"


function ItemListContainer () {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProductos(setTodos);
            <ItemList prop={productos}/>
        }, 2000);
    }, []);

    return 
}

export default ItemListContainer;