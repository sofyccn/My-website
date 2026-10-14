import React from "react";
import { Row, Col } from "react-bootstrap";
import Reveal from "../Reveal";

const experience = [
  {
    company: "Our Town America",
    role: "Software Engineer",
    dates: "Jan 2026 – Present",
    location: "Clearwater, FL",
    note: "Started as a Software Engineer Intern, promoted in May 2026",
    points: [
      "Architected an AI sales call analysis pipeline with Whisper speech-to-text, speaker diarization, and a local LLM that classifies call outcomes and surfaces the objections and talk tracks behind them for sales coaching.",
      "Built a GoHighLevel marketplace app so sales reps can use internal tools like the AI proposal generator and DocuSign without leaving High Level, which increased reported sales by 30%.",
      "Built REST API and webhook integrations that sync GoHighLevel with ActiveCampaign, Twilio, and the internal CRM into a single system of record.",
      "Built internal dashboards and reporting pages with SQL and JavaScript that about 50 employees rely on to track business metrics.",
      "Serve as release manager, and added automated testing to the GitHub Actions CI/CD pipeline as a quality gate.",
    ],
  },
  {
    company: "Kyodo Catalog",
    role: "Full Stack Developer",
    dates: "May 2026 – Present",
    location: "Remote",
    points: [
      "Built a B2B product catalog for 1,200 products from the client’s concept, owning the frontend, backend, branding, and UX/UI.",
      "Designed a server-enforced order workflow with full status history and role-based access for clients, dispatchers, and admins, replacing a physical catalog and Excel spreadsheets.",
      "Implemented authentication with Clerk, stored product images in Cloudflare R2, and deployed on Vercel and Railway.",
    ],
  },
  {
    company: "MiniBeast Enterprises",
    role: "Web Developer (Contract)",
    dates: "2026 – Present",
    location: "Remote",
    points: [
      "Reactivated push notifications with Firebase, enabled PDF downloads, and updated email templates for MiniBeast Official, a fitness and nutrition app.",
      "Containerized MiniBeast University, a PHP/MySQL course platform, with Docker on Apache, and added cron-driven email jobs and versioned schema migrations.",
    ],
  },
  {
    company: "RARE Lab, University of South Florida",
    role: "Research Intern, Computing Research Association",
    dates: "Jun 2025 – Jan 2026",
    location: "Tampa, FL",
    points: [
      <>
        Co-authored{" "}
        <a
          href="https://doi.org/10.1145/3776734.3794575"
          target="_blank"
          rel="noopener noreferrer"
          className="purple"
        >
          Bloom Preview: A Low-Cost LLM-Powered Social Robot
        </a>
        , published at ACM/IEEE HRI ’26, building the wake-word, speech-to-text,
        and text-to-speech pipeline for LLM-driven conversations.
      </>,
      "Integrated computer vision with Dynamixel motors via pypot for head-tracking behavior on a Raspberry Pi.",
    ],
  },
];

const education = [
  {
    school: "University of South Florida",
    degree: "B.S. in Computer Science, GPA 3.9",
    dates: "Aug 2024 – May 2026",
  },
  {
    school: "Hillsborough Community College",
    degree: "A.A. in Computer Science, GPA 4.0",
    dates: "Jan 2022 – May 2024",
  },
];

function Experience() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col md={10}>
          {experience.map((job) => (
            <Reveal className="experience-item spotlight" key={job.company}>
              <div className="experience-header">
                <h3 className="experience-company">{job.company}</h3>
                <span className="experience-dates">{job.dates}</span>
              </div>
              <div className="experience-header">
                <span className="purple">{job.role}</span>
                <span className="experience-dates">{job.location}</span>
              </div>
              {job.note && <p className="experience-note">{job.note}</p>}
              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Col>
      </Row>

      <Reveal as="h1" variant="drop" className="project-heading">
        <strong className="purple">Education</strong>
      </Reveal>
      <Row style={{ justifyContent: "center", padding: "20px 0 50px" }}>
        <Col md={10}>
          {education.map((item) => (
            <Reveal className="experience-item spotlight" key={item.school}>
              <div className="experience-header">
                <h3 className="experience-company">{item.school}</h3>
                <span className="experience-dates">{item.dates}</span>
              </div>
              <span className="purple">{item.degree}</span>
            </Reveal>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default Experience;
