import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../Assets/myImg.png";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  return (
    <section id="home"> 
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20   }}>
              <img src={myImg}  alt="home pic" className="img-fluid" style={{border:"2 px solid #0A81AB"}}  />
            </Col>
            <Col md={7} className="home-header">
              <h1  className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br"> Prajyoti Suryawanshi</strong>
              </h1>

              <div style={{  textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            
            
          </Row>
        </Container>    
      </Container>
      <SelfIntro/>
      
    </section>
  );
}

export default Home;