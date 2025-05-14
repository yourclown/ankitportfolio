import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (props.href) {
      // For external links
      window.open(props.href, props.target || "_self");
    } else if (props.demoLink) {
      // For demo links (could be internal or external)
      window.open(props.demoLink, props.target || "_self");
    }
  };

  return (
    <Card
      className="project-card-view"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }} // Changes cursor to pointer on hover
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
