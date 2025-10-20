import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import InCollege from "../../Assets/Projects/inCollege.png";
import taskmanager from "../../Assets/Projects/task.png";
import fsi from "../../Assets/Projects/fsi.png";
import bloom from "../../Assets/Projects/bloom.png";
import lpa from "../../Assets/Projects/lpa.png";
import theraplay from "../../Assets/Projects/theraplay.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theraplay}
              isBlog={false}
              title="Theraplay"
              description="Computer vision powered web system for physical therapy combining real time movement analysis and gamified experiences for both pediatric and adult users. I contributed to the frontend and backend workflows: integrating the motion tracking using MediaPipe, constructing the gamified UI in React, and collaborating on API endpoints that processed the movement data and delivered interactive feedback. This project sharpened my skills in full-stack development, real time data processing, and designing intuitive user experiences."
              ghLink="https://github.com/seljbari/TheraPlay"
              demoLink="https://devpost.com/software/theraplay-za54kh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanager}
              isBlog={false}
              title="Task Management App"
              description="Developed a full-stack productivity app combining a React + TypeScript frontend, FastAPI backend, and PostgreSQL database. The system supports full CRUD operations for task management and introduces a natural language interface powered by OpenAI and LangChain, allowing users to create structured tasks from free-form text. This project strengthened my experience with AI integration, full-stack architecture, and building intuitive, data-driven user experiences"
              ghLink="https://github.com/sofyccn/AI-task-manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloom}
              isBlog={false}
              title="Bloom"
              description="Work on a team to develop a social robot capable of recognizing and responding to human emotions using computer vision and speech interaction. I set up the Raspberry Pi environment, integrated face recognition modules, and optimized Python scripts for real time performance. The project explores how robots can engage empathetically with users through visual and conversational cues."
              ghLink="https://github.com/TheRARELab/blossom-public/tree/ba62b2a5c6bc72c6a89a583e2d4abc9665427c34"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InCollege}
              isBlog={false}
              title="In College"
              description="A LinkedIn-style networking platform designed for college students to connect and build professional relationships. The system is implemented in COBOL, with deployment and collaboration managed through Docker, GitHub, Slack, and Jira. My main contributions include implementing key user features, managing integration workflows, and improving code reusability for the team’s modular development."
              ghLink="https://github.com/kcibak/Arizona-f25CEN4020"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lpa}
              isBlog={false}
              title="Wellbeing and Reading Achievement LPA"
              description="I analyzed data from the PIRLS 2021 international reading assessment to explore how students’ well-being and school experiences relate to reading achievement. Using R, I performed Latent Profile Analysis (LPA) to identify classroom and student profiles based on factors such as belonging, bullying, and emotional well-being. I then used Python to visualize the results and compare the profiles’ reading outcomes."
              ghLink="https://github.com/sofyccn/PIRLS_2021"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fsi}
              isBlog={false}
              title="Florida State Inflatable"
              description="Developed a website for an inflatables business. I built the frontend using HTML, JS and CSS and integrated data-APIs along with filtering and responsive charts to allow users make reservations and contact the store. My role included designing the UI, writing the data-fetch and transform logic in JavaScript, and optimizing performance."
              ghLink="https://github.com/sofyccn/Florida-State-Inflatable"
              demoLink="https://www.youtube.com/watch?v=SCcaArgSjvU"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
