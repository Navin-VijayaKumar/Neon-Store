import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
import LoginSignUp from "./Pages/Auth/LoginSignUp";
import Addproduct from "../../Admin/Component/Addproduct/Addproduct";
import Display from "../../Admin/Component/Display/Display";
import SignUp from "./Components/Login";  // Ensure correct path
import SignOut from "./Components/Logout"; // Ensure correct path

// Google OAuth Client ID
const clientId = "815729641544-52hsjip01ocg0u9lf81d5prae31g3fco.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/display" element={<Display />} />
        <Route path="/product/:productID" element={<ProductDisplay />} />
      </Routes>

      <div>
        <h1>Welcome to Neon Store</h1>
        <SignUp />
        <SignOut />
      </div>

      <Footer />
    </GoogleOAuthProvider>
  );
}

export default App;
