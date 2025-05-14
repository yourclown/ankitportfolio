import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../Assets/avatar.svg";
import Ankit from "../../Assets/ankit1.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbSquareRounded } from "react-icons/tb";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> REBOOT </span> MYSELF 💾
            </h1>
            <p className="home-about-body">
              I’ve leveled up from a coding enthusiast to a{" "}
              <b className="purple">Backend Software Developer</b> with over{" "}
              <i>3+ years</i> of grinding in the tech trenches. 🚀
              <br />
              <br />I specialize in crafting{" "}
              <i>
                <b className="purple">scalable systems</b>
              </i>
              —slashing latency by <b>35%</b>, boosting workflows by <b>60%</b>,
              and delivering <b>99.8% uptime</b> like it’s no big deal. 💻
              <br />
              <br />
              My <span className="purple">core stack</span>? Think{" "}
              <i>
                <b className="purple">
                  JavaScript, TypeScript, Node.js, Express
                </b>
              </i>
              , and{" "}
              <i>
                <b className="purple">Python</b>
              </i>{" "}
              with a sprinkle of <b className="purple">Laravel</b>. I tame
              databases like <b>MySQL</b> and <b>MongoDB</b>, wield{" "}
              <b>GraphQL</b> for slick APIs, and scale with <b>Microservices</b>{" "}
              on <b>AWS</b>. 🌐
              <br />
              <br />I thrive in <b className="purple">Agile squads</b>, shipping
              clean code with <b>CI/CD pipelines</b>, caching with <b>Redis</b>,
              and tweaking <b>system design</b> for max efficiency. Oh, and I’m
              no stranger to <b>Linux</b> or debugging with <b>Postman</b>. 🛠️
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={Ankit}
                className="img-fluid rounded-circle"
                alt="avatar"
                style={{
                  width: "350px",
                  height: "350px",
                  border: "3px solid #9b59b6",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yourclown"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ankit_rocks0007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankit-prasad-1756b11b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <br></br>
              <li className="social-icons">
                <span className="purple glowing-icon">
                  Do Check My Insta for coding content:-{" "}
                </span>
                <a
                  href="https://www.instagram.com/code_crafttt/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons " // Added a new class for styling
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <br></br>
            <Link to="/contact-me">
              <button className="btn btn-dark" style={{ borderRadius: "10%" }}>
                Contact Me
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
