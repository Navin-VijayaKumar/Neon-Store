import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import News from './Pages/News/News'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Slider from './Components/Slider/Slider'
import ProductDisplay from './Components/ProductDisplay/ProductDisplay'
import Footer from './Components/Footer/Footer'
import Buy from'./Components/Buy/Buy'
import Cart from './Components/Cart/Cart'
function App() {
  // <Link to='/'><li>Home</li></Link> 
  // <Link to='/news'><li>News</li></Link> 
  // <Link to='/contact'><li>Contact</li></Link> 
  // <Link to='/about'><li>About</li></Link> 
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/news' element={<News></News>}> </Route>
      <Route path='/contact' element={<Contact></Contact>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/login' element={<Login></Login>}> </Route>
      <Route path='/cart' element={<Cart></Cart>}> </Route>
      <Route path='/slider'element={<Slider></Slider>}> </Route>
      <Route path='/product/:productID'element={<ProductDisplay></ProductDisplay>}> </Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
