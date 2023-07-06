import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import architech from "../../Assets/Projects/architech.png";
import crypto from "../../Assets/Projects/crypto.png";
import newsapp from "../../Assets/Projects/newsapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={architech}
              isBlog={false}
              title="architech"
              description="This is simple static web page of architech. It contains menu bar and little bit of css animation for image hover.Html and css js used to create the website"
              ghLink="https://github.com/RAJIE11/architect-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="crypto"
              description="The cryptocurrency website is used to track the variety of coins and also gives data of each coins current price.Then it also gives the market price of each coins. Reactjs is used to create this page and firebase is used for deplyoment."
              ghLink="https://github.com/RAJIE11/crypto-tracker"
              demoLink="https://crypto-project-react.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="Bits-0f-C0de"
              description="The Headlines Hint is a conversational voice controlled React News Application. You can find latest news by categories, terms and sources. I've used Alan AI to embed the contextual voice assistant into the application UI. It's easy to use and lets you control most of the actions just by your voice."
              ghLink="https://github.com/RAJIE11/AI-news-application/tree/main/News-app"
              demoLink="https://the-headline-hints.netlify.app/"
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
