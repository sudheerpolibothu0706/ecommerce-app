import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contactus from "./pages/Contactus"
import Collection from "./pages/Collection"
import Payment from "./pages/Payment"
import Myorders from "./pages/Myorders"
import Login from "./pages/Login"
import Aboutus from "./pages/Aboutus"
import Product from "./pages/Product"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"

function App() {
 
  return (
    <div>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<Contactus></Contactus>}/>
        <Route path="/collection" element={<Collection/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/myorders" element={<Myorders/>}/>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      <Footer/>
    </div>

  )
}

export default App
