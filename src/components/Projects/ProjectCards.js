import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`${props.title} screenshot`}
          loading="lazy"
        />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.badge && <p className="project-badge">{props.badge}</p>}
        {props.tech && (
          <div className="project-tech">
            {props.tech.map((name) => (
              <span className="project-tech-tag" key={name}>
                {name}
              </span>
            ))}
          </div>
        )}
        <Card.Text style={{ textAlign: "left" }}>{props.description}</Card.Text>
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {props.demoLabel || "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
