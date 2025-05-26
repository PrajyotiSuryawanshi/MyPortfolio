import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiAmazonaws,
  SiApachejmeter,
  SiEclipseide,   
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visualstudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachejmeter />
        <p>Jmeter</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p>Eclipse</p>
      </Col>
    </Row>
  );
}

export default ToolStack;