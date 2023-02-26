import React ,{useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate  } from "react-router-dom";
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
const  [loginUser, setLoginUser] = useState({});

console.log(loginUser);



 const verifyusers = JSON.parse(window.localStorage.getItem('LoggedInuser'))

  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
{
  loginUser ==={} ?  <Route exact index path={"/"} element={verifyusers?<Main/>:<Home />} />: <Route path={"/main"} element={<Main />} />
}


        <Route exact index path={"/"} element={<Home />} />
        <Route path={"/signin"} element={<Signin setLoginUser={setLoginUser} />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/main"} element={<Main />} />
          <Route path={"/searchresult"} element={<SearchResultComponent/>} />
          <Route index path={"/moviedetail/:id"} element={<MoviesDetails /> }  />
          <Route path={"*"} element={<ErrorPages />} />
          </Routes>
          </div>
    </BrowserRouter>
    </>
  );
};

export default App;
