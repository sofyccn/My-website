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
              I’m a <b className="purple">Senior Computer Science student</b> who loves working on new projects and learning new skills to keep my brain busy. 
              I’ve explored everything from <b className="purple">robotics, AI to data analytics and web apps.</b> I’m always curious about how tech can solve real problems.
              <br />
              <br />
              I code mostly in
              <i>
                <b className="purple">
                  {" "}
                  Python, React, C, and JavaScript{" "}
                </b>
              </i>
              and I enjoy using <b className="purple">APIs and AI </b> to make projects come alive
              <br />
              <br />
              My key areas of interest include creating
              <i>
                <b className="purple">
                  {" "}
                  Web Apps, AI Projects, and Data Visualizations{" "}
                </b>
              </i>
              I’m always excited to learn new technologies and adapt to whatever challenge comes next.

              <br />
              <br />
               When I’m not coding, you’ll probably find me 
              <b className="purple"> traveling </b> dancing{" "}
              <i>
                <b className="purple">learning new languages</b> {" "}I’m very social and 
                <b className="purple"> love making connections.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
