import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sofia3.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Software Engineer</b> at Our Town
              America and a Computer Science graduate from the University of
              South Florida. I build{" "}
              <b className="purple">
                AI pipelines, integrations, and full stack web apps
              </b>{" "}
              that people rely on at work.
              <br />
              <br />
              I code mostly in
              <i>
                <b className="purple">
                  {" "}
                  PHP, JavaScript, React, Python, and SQL{" "}
                </b>
              </i>
              and I enjoy using <b className="purple">APIs and AI </b> to make
              projects come alive.
              <br />
              <br />
              Lately that has meant an AI sales call analysis pipeline, CRM
              integrations, and a B2B product catalog I built end to end.
              Before that I did human–robot interaction research at USF’s RARE
              Lab, where I co-authored a paper{" "}
              <b className="purple">published at ACM/IEEE HRI ’26</b>.
              <br />
              <br />
              When I’m not coding, you’ll probably find me
              <b className="purple"> traveling</b>, dancing, or{" "}
              <i>
                <b className="purple">learning new languages</b>
              </i>{" "}
              (I speak Spanish, English, and Portuguese). I’m very social and
              <b className="purple"> love making connections.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Sofia Cobo" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
