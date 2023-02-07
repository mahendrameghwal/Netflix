import React , {useEffect} from 'react' ;
import { useNavigate, } from 'react-router-dom';
import { Section1 , Section2  , FAQ, } from '../components/Mainsection';
import { Usefirebase } from '../Firebase/Firebase';

const Home = () => {
const navigate = useNavigate();
const Firebase = Usefirebase();

  // useEffect(()=>{
  //   if (Firebase.LoginOrNot===true) {
  //     navigate("/main")
  //   }
  //  },[Firebase, navigate])

  return (
    <div>
   <Section1/>
   <Section2/>
   <FAQ/>
  
    </div>
  )
}

export default Home;