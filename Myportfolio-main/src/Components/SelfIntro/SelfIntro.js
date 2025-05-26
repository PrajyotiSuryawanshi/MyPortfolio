import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi,👋 I'm <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Prajyoti Suryawanshi</span> an aspiring and determined <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Software Tester</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span style={{color: "#0A81AB" , fontStyle:"italic"}}>QA specialist | Manual | Automation</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
              <br/>
              <br/>
              I developed passion for Testing a few years back when I find my first <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Critical-Bug</span> 😃, realized the impact it had on improving the quality of the application..
            </p>
          </Col>
        
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
