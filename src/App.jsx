
import "./App.css"
import Brand from "./components/Brand/Brand"
import { Footer } from "./components/Footer/Footer"
import { Error } from "./components/Error/Error"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { getFirestore,collection,getDocs,query,where } from "firebase/firestore"
const App = () => {


  return (
    <>

      <BrowserRouter>
      
        <Brand/>

        <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>

              <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
              
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              
              <Route path='*' element= {<Error/>}/>
          </Routes>
       
        
        <Footer/>
        </BrowserRouter>

      
    
    </>
  )
}

export default App
