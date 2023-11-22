import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiAlpinelinux,
  SiDocker,

} from "react-icons/si";

import { DiLinux } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title={'linux'}>
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'VsCode'}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Postman'}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Slack'}>
        <SiSlack />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title={'Docker'}>
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
