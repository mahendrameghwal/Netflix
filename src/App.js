import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Main from "./page/Main";
import MoviesDetails from "./page/MoviesDetails";
import SearchResultComponent from "./page/SearchResultComponent";
import ErrorPages from "./Error/ErrorPages";


const App = () => {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
          <Route index path={"/"} element={<Home />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/main"} element={<Main />} />
          <Route path={"/searchresult"} element={<SearchResultComponent/>} />
          <Route index path={"/moviedetail/:id"} element={<MoviesDetails /> }  />
          <Route path={"*"} element={<ErrorPages />} />
          </Routes>
          </div>
    </BrowserRouter>

  );
};

export default App;
