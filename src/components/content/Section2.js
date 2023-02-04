import React from "react";
import { device1, video1 , mobile , children} from "../../images/image";
// import { Container, Row, Col } from "react-grid";/

// <Row>
// <Col>1 of 2</Col>
// <Col>2 of 2</Col>
// </Row>

const Section2 = () => {
  return (
    <main>
      <div className="one">
        <div className="text">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="image">
          <img src={device1} alt="" />
          <div className="video">
            <video    src={video1}
              autoPlay={true}
             
              muted={true}
              loop={true} />
          </div>
        </div>
 </div>

 {
  //two
 }


 <div className="row">
 <div className="col-1">

<img src={mobile} alt="mobile"/>

 </div> 
 <div className="col-2">
 <h1>Download your shows to watch offline.</h1>
 <p>
 Save your favourites easily and always have something to watch.
</p>
 </div>
 
 
 
 </div>



 <div className="row initrow">
 <div className="col-1">

 <h1>Create profiles for children.</h1>
 <p>
 Send children on adventures with their favourite characters in a space made just for them—free with your membership.
</p>

 </div> 
 <div className="col-2">


<img className="children" src={children} alt="mobile"/>
 </div>
 
 
 
 </div>

      

    </main>
  );
};

export default Section2;
