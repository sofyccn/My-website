import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Experience from "./Experience";
import Aboutcard from "./AboutCard";
import coding from "../../Assets/coding.jpg";
import Reveal from "../Reveal";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
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
              <Reveal as="h1" variant="spacing" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I AM</strong>
              </Reveal>
              <Reveal delay={150}>
                <Aboutcard />
              </Reveal>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <Reveal variant="zoom" delay={250}>
                <img src={coding} alt="Sofia with teammates" className="img-fluid home-photo" />
              </Reveal>
            </Col>
          </Row>
          <Reveal as="h1" variant="drop" className="project-heading" style={{ paddingBottom: "20px" }}>
            Work <strong className="purple">Experience</strong>
          </Reveal>
          <Experience />

          <Reveal as="h1" variant="drop" className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </Reveal>

          <Techstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
