import {useState} from "react";


const ItemCount = (producto) => {

    const [cont, setCont] = useState(1);

    const agregar = () =>{
        if(cont < producto.stock){
            setCont(cont + 1);
        }
    }


    const quitar = () =>{
        if(cont > 0){
            setCont(cont - 1);
        }
    }


    return (
        <>
            <p>Stock: {producto.stock}</p>

            <div id="contador">
                <button onClick={quitar} className="material-icons">remove</button>
                <p>Cantidad: {cont}</p>
                <button onClick={agregar} className="material-icons">add</button>
            </div>
        </>
    )
}

export default ItemCount;