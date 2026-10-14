import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowRight, BsArrowDown } from "react-icons/bs";
import Particle from "../Particle";
import caseStudies from "./caseStudies";

function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return <Navigate to="/project" />;

  return (
    <Container fluid className="project-section case-study">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={9}>
            <Link to="/project" className="case-back">
              <BsArrowLeft /> All projects
            </Link>

            <p className="case-context">{study.context}</p>
            <h1 className="case-title">{study.title}</h1>
            <p className="project-badge">{study.badge}</p>
            <p className="case-summary">{study.summary}</p>

            <div className="project-tech">
              {study.tech.map((name) => (
                <span className="project-tech-tag" key={name}>
                  {name}
                </span>
              ))}
            </div>

            {study.links.length > 0 && (
              <div className="project-links case-links">
                {study.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {study.img && (
              <img
                src={study.img}
                alt={`${study.title} screenshot`}
                className="img-fluid case-image"
                style={{ objectPosition: study.imgPosition }}
              />
            )}

            <section className="case-section">
              <h2>The problem</h2>
              <p>{study.problem}</p>
            </section>

            <section className="case-section">
              <h2>My role</h2>
              <p>{study.role}</p>
            </section>

            <section className="case-section">
              <h2>{study.flowTitle}</h2>
              <ol className="case-flow">
                {study.flow.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <li className="case-flow-step">
                      <span className="case-flow-label">{step.label}</span>
                      {step.detail && (
                        <span className="case-flow-detail">{step.detail}</span>
                      )}
                    </li>
                    {i < study.flow.length - 1 && (
                      <li className="case-flow-arrow" aria-hidden="true">
                        <BsArrowRight className="arrow-wide" />
                        <BsArrowDown className="arrow-narrow" />
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </section>

            <section className="case-section">
              <h2>What I built</h2>
              <ul>
                {study.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="case-section">
              <h2>Results</h2>
              <ul>
                {study.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CaseStudy;
