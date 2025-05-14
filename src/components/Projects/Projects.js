import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hospital from "../../Assets/Projects/hospital.jpg";
import mind from "../../Assets/Projects/Mindryl-AI.png";
import food from "../../Assets/Projects/food.jpg";
import parking from "../../Assets/Projects/parking.jpg";
import malware from "../../Assets/Projects/malware.jpeg";
import hotel from "../../Assets/Projects/hotel.jpg";

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
              imgPath={mind}
              href="https://mindrylai.vercel.app/"
              target="_blank" // Opens in new tab
              isBlog={false}
              title="Mindryl-AI"
              description="An AI-driven social platform transformation tool powered by Grok-AI, featuring smart AI-based post creation, dynamic
feed system, style-based outputs, audio playback, real-time sockets, cron jobs, and structured logging & much more."
              ghLink="" // GitHub link if available
              demoLink="" // Alternative demo link
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="EHR System for Clinic"
              description="Leveraging PHP Laravel for backend development, jQuery, JavaScript for dynamic frontend interactions, and MySQL for secure andefficient database management. Currently being used by 3 Clinics around Noida."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Ordering Flatform"
              description="Platform using the MERN stack (MongoDB, Express.js, React, Node.js) along with additional technologies such as Redux for statemanagement and Socket.IO for real-time order updates."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Managemnet System"
              description="Elevate hospitality management with a MERN stack-powered hotel management system, seamlessly integrating MongoDB, Express.js, React, and Node.js for robust functionality and an intuitive user experience."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parking}
              isBlog={false}
              title="Smart Parking System (Hackathon Participation)"
              description="Built a Smart Parking System using machine learning in Jupyter, optimizing space allocation for efficient urban parking. Integrated IoTsensors for real-time data, enhancing traffic flow and reducing congestion."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malware}
              isBlog={false}
              title="Machine learning Based Malware Detection System"
              description="Implemented a Machine Learning-Based Malware Detection System, leveraging Python for data analysis and model training, andutilizing TensorFlow for efficient machine learning algorithms."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
