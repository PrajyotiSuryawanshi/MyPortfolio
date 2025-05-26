import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
  DiHtml5,
  
} from "react-icons/di";
import {SiRedux,SiExpress,SiTailwindcss, SiSelenium, SiApachemaven, SiCucumber, SiCypress, SiMysql, SiJira     } from "react-icons/si";
import { FaJava } from "react-icons/fa";



function Techstack() {
  return (<div id="skills" >
    <br/>
    <br/>
    <br/>
    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
    <span className="purple">Skills</span> 
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
    <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <p>Selenium</p>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <p>Maven</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCucumber />
        <p>Cucumber</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
       <SiCypress />
        <p>Cypress</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>SQL</p>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>Html5</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <p>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiJira />
        <p>Jira</p>
      </Col>
    </Row>
    </div>
  );
}

export default Techstack;