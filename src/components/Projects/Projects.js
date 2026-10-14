import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bloom from "../../Assets/Projects/bloom.png";
import lpa from "../../Assets/Projects/lpa.png";
import theraplay from "../../Assets/Projects/theraplay.jpeg";
import kyodo from "../../Assets/Projects/kyodo.png";
import campusEvents from "../../Assets/Projects/campusEvents.jpg";
import nosyNeighbor from "../../Assets/Projects/nosyNeighbor.png";
import bullspath from "../../Assets/Projects/bullspath.png";

const projects = [
  {
    title: "Kyodo Catalog",
    badge: "Client project · 2026",
    tech: ["React", "TypeScript", "PostgreSQL", "Clerk", "Cloudflare R2"],
    imgPath: kyodo,
    description:
      "A private B2B catalog and order-request app for an agricultural machinery and spare-parts business, covering 1,200 products. Approved clients browse the catalog and send order requests, dispatchers confirm stock, and every status change is enforced on the server and recorded in a history table. I built it end to end from the client’s concept: frontend, backend, branding, and UX/UI. It replaced a physical catalog and Excel spreadsheets.",
    ghLink: "https://github.com/sofyccn/catalog",
    demoLink: "https://catalog-api-ten.vercel.app",
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
    title: "Bloom",
    badge: "Published at ACM/IEEE HRI ’26",
    tech: ["Python", "Raspberry Pi", "Computer Vision", "LLM"],
    imgPath: bloom,
    description:
      "A low-cost, LLM-powered social robot built at USF’s RARE Lab. I built the wake-word, speech-to-text, and text-to-speech pipeline for its conversations, and integrated computer vision with Dynamixel motors for head-tracking on a Raspberry Pi. I’m a co-author of the paper, Bloom Preview: A Low-Cost LLM-Powered Social Robot.",
    ghLink:
      "https://github.com/TheRARELab/blossom-public/tree/ba62b2a5c6bc72c6a89a583e2d4abc9665427c34",
    demoLink: "https://doi.org/10.1145/3776734.3794575",
    demoLabel: "Paper",
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
    title: "BullsPath",
    badge: "HackJam 2025",
    tech: ["Python", "Gemini API", "NetworkX", "Matplotlib", "Tailwind CSS"],
    imgPath: bullspath,
    description:
      "An AI campus companion for new USF students, built in a 6-hour hackathon. You ask in plain language, like “where can I find a microwave near the library?”, and Gemini turns the request into a destination. A* pathfinding over a graph of campus locations finds the route, which is drawn on a map and read aloud as an audio guide.",
    ghLink: "https://github.com/mmosoriov/navigating_USF",
    demoLink: "https://devpost.com/software/bullspath",
    demoLabel: "Devpost",
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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
