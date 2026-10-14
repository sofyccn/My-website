import React from "react";
import { Col, Row } from "react-bootstrap";
import Reveal from "../Reveal";
import {
  SiPhp,
  SiExpress,
  SiPrisma,
  SiFlask,
  SiBun,
  SiWordpress,
  SiGithubactions,
  SiPostgresql,
  SiMysql,
  SiOpenai,
  SiFirebase,
  SiNumpy,
} from "react-icons/si";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import R from "../../Assets/TechIcons/R.svg";
import Ci from "../../Assets/TechIcons/C.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";

const stack = [
  { name: "TypeScript", img: Typescript },
  { name: "JavaScript", img: Javascript },
  { name: "Python", img: Python },
  { name: "PHP", Icon: SiPhp },
  { name: "SQL", img: SQL },
  { name: "R", img: R },
  { name: "C", img: Ci },
  { name: "React", img: ReactIcon },
  { name: "Node.js", img: Node },
  { name: "Express", Icon: SiExpress },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Flask", Icon: SiFlask },
  { name: "Bun", Icon: SiBun },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "Docker", img: Docker },
  { name: "Git", img: Git },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "OpenAI API", Icon: SiOpenai },
  { name: "Firebase", Icon: SiFirebase },
  { name: "NumPy", Icon: SiNumpy },
  { name: "WordPress", Icon: SiWordpress },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map(({ name, img, Icon }, i) => (
        <Reveal
          as={Col}
          xs={4}
          md={2}
          variant="zoom"
          delay={i * 40}
          className="tech-icons"
          key={name}
        >
          {img ? (
            <img src={img} alt="" />
          ) : (
            <Icon className="tech-icon-images" aria-hidden="true" />
          )}
          <div className="tech-icons-text">{name}</div>
        </Reveal>
      ))}
    </Row>
  );
}

export default Techstack;
