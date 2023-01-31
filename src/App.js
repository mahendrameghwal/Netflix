
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./page/Signin";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
  <Header/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"*"} element={<h2>No url found</h2>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
