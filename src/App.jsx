import { Route , Routes } from "react-router"
import Homepage from "./pages/Homepage"
import ProductsList from "./pages/ProductsList"
import CreateProduct from "./pages/CreateProduct"
import ProductDetails from "./pages/ProductDetails"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/products' element={<ProductsList/>} />
      <Route path='/products/create' element={<CreateProduct/>} />
      <Route path='products/:pID' element={<ProductDetails/>} />
    </Routes>
    
    </>
  )
}

export default App