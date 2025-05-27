import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR56SPZl9kID1l8JFPF3e2CuScLmFMPPM0U1zQxsOuprbbeC5_Y"
              title="Automation & Manual Testing With Api Testing- BlazeDemo"
              description="Automated end-to-end test scenarios on BlazeDemo, a demo flight booking website used for practicing web automation. Focused on UI interaction, form validation, and workflow verification using Selenium."
              tech="Tech-Stacks"
              techD="Selenium WebDriver | TestNG | Maven | POM | Postman | ReStAssured | Jmeter | Google Docs | Google Sheet | XmindMap | Github "
              link="https://blazedemo.com/"
              a="https://github.com/kusuma6379/Final-Hackathon"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/Tutorial-Ninja.png"
              title="Automation & Manual Testing Tutorial-Ninja"
              description="inja-Tutorial is an educational demo website designed for automation practice, featuring dynamic content like forms, alerts, and tables. This project involved automating key user interactions and validating UI elements using tools such as Selenium"
              tech="Tech-Stacks"
              techD="Selenium WebDriver | TestNG | JUnit | Maven | POM | Cucumber | Google Docs | Google Sheet | XmindMap | Github "
              link="https://tutorialsninja.com/demo/"
              a="https://github.com/TaffazulAnsari/5022_Tutorials-Ninja"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/StyleMate.png"
              title="Automation & Manual Testing-StyleMate"
              description="StyleMate is a fashion e-commerce demo website used for automation testing of user flows like product search, cart management, and checkout. The project focused on automating UI interactions and validating dynamic elements using Cypress."
              tech="Tech-Stacks"
              techD="Cypress | POM | JavaScript | Google Docs | Google Sheets | XmindMap |"
              link="https://luni-interface-029.vercel.app/"
              a="https://github.com/PrajyotiSuryawanshi/StyleMate_Automation_Project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
