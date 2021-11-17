import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



import Header from "./components/Header";
import Nav from "./components/NavBar";
import CarWidget from "./components/CarWidget.jsx";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";


function App() {
    const url ='https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState ()
    const fetchApi = async () =>{
        const response = await fetch (url)
        const responseJSON = await response.json()
        setTodos (responseJSON)
    
    }
}

const App = () => {
    return(
        <BrowserRouter>
                <CartProvider>
                <Router>
                
                <Header/>
                <Nav/> <CarWidget/>
                <ItemCount stock="6"/>
                <Switch>
                    <Route path="/">
                        <ItemListContainer mensaje="ItemListContainer"/>
                    <Route/>
                </Switch>
                <Route path="./cart">
                </Route>
                <Switch>
                    
                    <Route path="/item/:id"> 
                    <ItemDetailContainer/>
                <Route/>
                </Switch>
                <Router/>
    </BrowserRouter>     

       
    );
}

export default App