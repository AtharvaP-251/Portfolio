import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            //imgPath={chatify}
                            isBlog={false}
                            title="Algo Visualizer"
                            description="Dynamic frontend web app showcasing 11 sorting algorithms with FLIP-based visualization. The app uses colorful blocks to represent data, animating swaps and comparisons. Users can compare algorithms in real-time for an engaging learning experience."
                            demoLink="https://algorithm-visualizer-7.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Electo-Chain"
                            description="A web application utilizing the Ethereum Blockchain to manage elections. The application includes functionalities for conducting elections and displaying results securely. Additionally, it provides an interface for voter registration and manual verification, ensuring the integrity and transparency of the electoral process."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Self Driving Car"
                            description="Developed a prototype Self-Driving Car model. The car autonomously detects lane ends, responds to stop signals, executes U-turns accurately, and integrates functionalities for automatic recognition of left and right turns. It also includes obstacle avoidance capabilities."
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
