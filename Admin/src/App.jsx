import React from 'react';
import Slider from '../Component/Slider/Slider';
import { Route, Routes } from 'react-router-dom';
import Display from '../Component/Display/Display';
import Addproduct from '../Component/Addproduct/Addproduct';

const App = () => {
  return (
    <>
      <Slider />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/Display' element={<Display />} />
      </Routes>
    </>
  );
}

export default App;
