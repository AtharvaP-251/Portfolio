import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiJava, DiDocker } from "react-icons/di";
import {
    SiPostgresql,
    SiKubernetes,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
        </Row>
    );
}

export default Techstack;
