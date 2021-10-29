import Item from "./Item"

function ItemList(productos) {


    if(productos.length === 0){
        return <p> Loading </p>;
    } else {
        return (
            <div className="ListContainer">
                {productos.map((e, i) => {
                    return (
                        <Item prop={producto}/>
                    )
                })}
            </div>
        );
    }
}

export default ItemList