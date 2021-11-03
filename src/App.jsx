import React, {useState, useEffect} from "react";

import Header from "./components/Header";
import Nav from "./components/NavBar";
import CarWidget from "./components/CarWidget.jsx";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"


function App() {
    const url ='https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState ()
    const fetchApi = async () =>{
        const response = await fetch (url)
        const responseJSON = await response.json()
        setTodos (responseJSON)
    
    }
    useEffect(() => {
        fetchApi()
    }
}
const App = () => {
    return(
        <>
        <Header/>
        <Nav/> <CarWidget/>
        <ItemCount stock="6"/>
        <ItemListContainer mensaje="ItemListContainer"/>
        <ItemDetailContainer/>
       
            

        </>
    );
}

export default App