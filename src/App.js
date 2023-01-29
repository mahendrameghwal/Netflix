
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
// import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
  <Header/>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
    
      </div>
    </BrowserRouter>
  );
};

export default App;
