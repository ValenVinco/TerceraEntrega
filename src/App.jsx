import Header from "./components/Header"
import Nav from "./components/NavBar"
import CarWidget from "./components/CarWidget.jsx";
import ItemListContainer from "./components/ItemListContainer"


const App = () => {
    return(
        <>
        <Header/>
        <Nav/>
        <ItemListContainer mensaje="Hola, ya te registraste?"/>
        <CarWidget/>
        </>
    );
}

export default App