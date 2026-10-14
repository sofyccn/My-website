import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/sofia.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const highlights = [
  {
    value: "HRI ’26",
    label: "Published paper",
    href: "https://doi.org/10.1145/3776734.3794575",
  },
  {
    value: "1st Place",
    label: "HealthHacks USF",
    href: "https://devpost.com/software/theraplay-za54kh",
  },
  {
    value: "Research Award",
    label: "USF Undergraduate Research",
    href: "https://github.com/sofyccn/PIRLS_2021",
  },
  {
    value: "+30%",
    label: "Reported sales from an app I built",
    to: "/about",
  },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOFIA COBO</strong>
              </h1>

              <div className="home-type">
                <Type />
              </div>

              <p className="home-tagline">
                I build AI pipelines, integrations, and full stack web apps
                that people rely on at work.
              </p>

              <p className="home-open-to">
                <span className="status-dot" aria-hidden="true" />
                Open to full-time roles, internships, freelance work, and
                collaborations
              </p>

              <div className="home-cta">
                <Link to="/project" className="btn btn-primary">
                  View my work
                </Link>
                <Link to="/resume" className="btn btn-outline-light">
                  Resume
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Sofia Cobo"
                className="img-fluid home-photo"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          <ul className="highlights">
            {highlights.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link to={item.to}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sofyccn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sofia-cobo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sofy_ccn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sofycobo14@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
