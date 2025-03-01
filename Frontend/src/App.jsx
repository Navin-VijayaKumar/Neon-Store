import { Route, Routes } from "react-router-dom";

// Import Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Slider from "./Components/Slider/Slider";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import Footer from "./Components/Footer/Footer";
import Buy from "./Components/Buy/Buy";
import Cart from "./Components/Cart/Cart";
import Addproduct from "../../Admin/Component/Addproduct/Addproduct";
import Display from "../../Admin/Component/Display/Display";

import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
// Google OAuth Client ID

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/display" element={<Display />} />
        <Route path="/product/:productID" element={<ProductDisplay />} />
      </Routes>

     

      <Footer />
    </>
  );
}

export default App;
