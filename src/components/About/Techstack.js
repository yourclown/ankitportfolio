import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiLaravel,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons" title={'JavaScript'}>
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title={'Node.js'} >
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'React.js'}>
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title={'MongoDb'}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Next.js'}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Git'}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Firebase'}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Redis'}>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Mysql'}>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={'Laravel'}> 
        <SiLaravel />
      </Col>


    </Row>
  );
}

export default Techstack;
