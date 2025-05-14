import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Prasad </span>
            from <span className="purple"> Noida,India.</span>
            <br />
            I am Software Engineer.
            <br />
            I have completed B.Tech In Computer Science(2023) at Sharda University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do in my spare time!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Research
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code your dreams into reality, debug your doubts, and compile success with persistence. In the binary of life, every bug is just a step closer to a feature. Keep coding, stay committed, and let your passion be the algorithm that drives your success!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit Prasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
