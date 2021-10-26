import Header from "./components/Header"
import Nav from "./components/NavBar"
import CarWidget from "./components/CarWidget.jsx";
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from ".components/ItemCount"


const App = () => {
    return(
        <>
        <Header/>
        <Nav/>
        <ItemListContainer mensaje="Hola, ya te registraste?"/>
        <Itemcount stock="6"/>
        <CarWidget/>    

        </>
    );
}

export default App