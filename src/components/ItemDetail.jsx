import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

function ItemDetail({producto}){

    const handleUpCounter = (cont) => {
        console.log('contador:'+ cont)
    }
}
const ItemDetail = ((Item)) (
    return <> (
    <h1  className="nike">nike</h1>
                <img src="./img/logo.png" alt=""  className="logo">
                <a href="#"  className="share"><i  className="fas fa-share-alt"></i></a>

                <img src={"./multimedia/blue.png"} alt=""  className="shoe show" color="blue">
                <img src={"./multimedia/red.png"} alt=""  className="shoe" color="red">
                <img src={"./multimedia/green.png"} alt=""  className="shoe" color="green">
                <img src={"./multimedia/orange.png"} alt=""  className="shoe" color="orange">
                <img src={"./multimedia/black.png"} alt=""  className="shoe" color="black">

            </div>
            <div  className="info">
                <div  className="shoeName">
                    <div>
                        <h1  className="big">Nike Zoom KD 12</h1>
                        <span  className="new">new</span>
                    </div>
                    <h3  className="small">Keyrun Development</h3>
                </div>
                <div  className="description">
                    <h3  className="title">Product Info</h3>
                    <p  className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                </div>
                <div  className="color-container">
                    <h3  className="title">Color</h3>
                    <div  className="colors">
                        <span  className="color active" primary="#2175f5" color="blue"></span>
                        <span  className="color" primary="#f84848" color="red"></span>
                        <span  className="color" primary="#29b864" color="green"></span>
                        <span  className="color" primary="#ff5521" color="orange"></span>
                        <span  className="color" primary="#444" color="black"></span>
                    </div>
                </div>
                <div  className="size-container">
                    <h3  className="title">size</h3>
                    <div  className="sizes">
                        <span  className="size">7</span>
                        <span  className="size">8</span>
                        <span  className="size active">9</span>
                        <span  className="size">10</span>
                        <span  className="size">11</span>
                    </div>
                </div>
                <div  className="buy-price">
                <Link to="./cart">
                    <a href="#"  className="buy"><i  className="fas fa-shopping-cart"></i>Add to card</a>
                    </Link>
                    <div  className="price">
                        <i  className="fas fa-dollar-sign"></i>
                        <h1>189.99</h1>
                    </div>
                </div>
    }   

}

ixport default ItemDetail