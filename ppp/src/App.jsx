import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Countries from "./pages/Countries"
import Country from "./Country"


function App() {
  
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Countries/>}/>
      <Route path="/countries" element={<Countries/>}/>
      <Route path="/countries/:names" element={<Country/>}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
