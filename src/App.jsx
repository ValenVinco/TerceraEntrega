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
            

       
    );
}

export default App