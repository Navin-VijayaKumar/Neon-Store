import React from 'react';
import Slider from '../Component/Slider/Slider';
import { Route, Routes } from 'react-router-dom';
import Display from '../Component/Display/Display';
import Addproduct from '../Component/Addproduct/Addproduct';
import Navbar from '../Component/Navbar/Navbar';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
      <Slider />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/allproducts' element={<Display />} />
      </Routes>
    </>
  );
}

export default App;
