import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sofia Cobo Navas</span>{" "}
            from <span className="purple">Tampa, Florida</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Research Assistant</span> at{" "}
            <span className="purple">RARE lab</span>.
            <br />I am pursuing a B.S. in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">University of South Florida</span>.
            <br />
            <br />
            Outside of coding, I love exploring and being creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling  
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your life is as good as your mindset"{" "}
          </p>
          <footer className="blockquote-footer">Sofia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
