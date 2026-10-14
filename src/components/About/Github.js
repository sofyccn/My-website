import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="sofyccn"
        blockSize={30}
        blockMargin={10}
        theme={{
          level0: "#2a2140",
          level1: "#5b3a86",
          level2: "#8250b8",
          level3: "#a868e0",
          level4: "#c770f0",
        }}
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
