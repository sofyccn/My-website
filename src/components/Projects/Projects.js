import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import caseStudies from "./caseStudies";
import Particle from "../Particle";
import lpa from "../../Assets/Projects/lpa.jpg";
import theraplay from "../../Assets/Projects/theraplay.jpg";
import campusEvents from "../../Assets/Projects/campusEvents.jpg";
import nosyNeighbor from "../../Assets/Projects/nosyNeighbor.jpg";

const projects = [
  {
    title: "TheraPlay",
    badge: "1st Place, HealthHacks USF · Fall 2025",
    tech: ["React", "MediaPipe", "Flask", "Gemini API"],
    imgPath: theraplay,
    description:
      "A real-time rehab platform that turns physical therapy into a game for both pediatric and adult patients. It tracks 25 body keypoints per frame with MediaPipe to score patient movement, then generates clinical progress reports through the Gemini API.",
    ghLink: "https://github.com/seljbari/TheraPlay",
    demoLink: "https://devpost.com/software/theraplay-za54kh",
    demoLabel: "Devpost",
  },
  {
    title: "Nosy Neighbor",
    badge: "HackUSF 2026",
    tech: ["React", "PHP", "Docker", "OpenAI API", "Google Street View"],
    imgPath: nosyNeighbor,
    description:
      "AI-powered lead qualification for home service businesses like roofers, landscapers, and HVAC companies. A business uploads prospect addresses, the app pulls Google Street View imagery for each one, and OpenAI vision picks out the homes that visibly need that service. Each qualified lead gets a personalized postcard written from what was observed. I was the team’s UX/UI engineer.",
    demoLink: "https://devpost.com/software/nosy-neighbor",
    demoLabel: "Devpost",
  },
  {
    title: "CampusEvents",
    badge: "Spring 2026",
    tech: ["React", "TypeScript", "PostgreSQL", "Bun", "Hono", "Docker"],
    imgPath: campusEvents,
    ghLink: "https://github.com/trevorflahardy/CampusEvents",
    description:
      "A campus event and ticket booking system for USF students and event organizers, built as a team project. It has JWT authentication, role-based access control, real-time ticket tracking, and a PostgreSQL schema behind a REST API with 15+ endpoints for event management, ticket purchasing, and analytics.",
  },
  {
    title: "Student Well-Being Classification",
    badge: "Undergraduate Research Award, USF · Spring 2025",
    tech: ["R", "SPSS", "NumPy", "Matplotlib"],
    imgPath: lpa,
    description:
      "Used data from the PIRLS 2021 international reading assessment to explore how students’ well-being relates to reading achievement. I applied Latent Profile Analysis to classify 4 well-being profiles from 500+ students, ran statistical testing (ANOVA, BIC, post-hoc Tukey), and built 15+ visualizations.",
    ghLink: "https://github.com/sofyccn/PIRLS_2021",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Work </strong>
        </h1>
        <p className="project-intro">
          The problem, what I built, and how it turned out.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {caseStudies.map((study) => (
            <Col md={4} className="project-card" key={study.slug}>
              <Link to={`/project/${study.slug}`} className="featured-card">
                {study.img ? (
                  <img
                    src={study.img}
                    alt=""
                    className="featured-card-img"
                    style={{ objectPosition: study.imgPosition }}
                    loading="lazy"
                  />
                ) : (
                  <div className="featured-card-img featured-card-placeholder">
                    {study.flow.slice(1, 4).map((step) => (
                      <span key={step.label}>{step.detail || step.label}</span>
                    ))}
                  </div>
                )}
                <div className="featured-card-body">
                  <p className="case-context">{study.context}</p>
                  <h2>{study.title}</h2>
                  <p className="project-badge">{study.badge}</p>
                  <p className="featured-card-summary">{study.summary}</p>
                  <span className="featured-card-cta">
                    Read the case study <BsArrowRight />
                  </span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        <h1 className="project-heading">
          More <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={6} lg={3} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
