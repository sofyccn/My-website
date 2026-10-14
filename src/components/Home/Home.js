import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/sofia.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Reveal from "../Reveal";
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
    href: "https://mintlaboratory.notion.site/Sofia-awarded-undergraduate-research-award-1f816922771280bcb572c5e66ec98e88",
  },
  {
    value: "+30%",
    label: "Reported sales from an app I built",
    to: "/about",
  },
];

// Splits text into letters that rise in one after another on page load
function AnimatedLetters({ text, startDelay = 0 }) {
  return (
    <span className="letters" aria-label={text}>
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="letter"
          aria-hidden="true"
          style={{ animationDelay: `${startDelay + i * 45}ms` }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading hero-fade">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <AnimatedLetters text="I'M " startDelay={150} />
                <strong className="main-name">
                  <AnimatedLetters text="SOFIA COBO" startDelay={330} />
                </strong>
              </h1>

              <div className="home-type hero-fade" style={{ animationDelay: "800ms" }}>
                <Type />
              </div>

              <p className="home-tagline hero-fade" style={{ animationDelay: "900ms" }}>
                I build AI pipelines, integrations, and full stack web apps
                that people rely on at work.
              </p>

              <p className="home-open-to hero-fade" style={{ animationDelay: "1000ms" }}>
                <span className="status-dot" aria-hidden="true" />
                Open to full-time roles, internships, freelance work, and
                collaborations
              </p>

              <div className="home-cta hero-fade" style={{ animationDelay: "1100ms" }}>
                <Link to="/project" className="btn btn-primary magnetic">
                  View my work
                </Link>
                <Link to="/resume" className="btn btn-outline-light magnetic">
                  Resume
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="hero-photo-in">
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable
                  glareMaxOpacity={0.15}
                  glareBorderRadius="20px"
                  className="home-photo-tilt"
                >
                  <img
                    src={homeLogo}
                    alt="Sofia Cobo"
                    className="img-fluid home-photo"
                    style={{ maxHeight: "450px" }}
                  />
                </Tilt>
              </div>
            </Col>
          </Row>

          <ul className="highlights">
            {highlights.map((item, i) => (
              <Reveal as="li" key={item.label} delay={i * 110}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="spotlight">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link to={item.to} className="spotlight">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </Link>
                )}
              </Reveal>
            ))}
          </ul>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <Reveal as="h1" variant="spacing">Find Me On</Reveal>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sofyccn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons magnetic"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sofia-cobo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons magnetic"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sofy_ccn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons magnetic"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sofycobo14@gmail.com"
                  className="icon-colour home-social-icons magnetic"
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
