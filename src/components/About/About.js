import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopimg from "../../Assets/laptopimg.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className=" heading-emoji" style={{fontSize: "2.1em", paddingBottom: "20px" , color:"#68187a;"}}>
              Know Who I'M &#128512;
            </h1>
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "60px" , paddingLeft: "70px" }}
            className="about-img"
          >
            <img src={laptopimg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
