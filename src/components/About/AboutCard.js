import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Atharva Patil </span>
                        from <span className="purple"> Kolhapur, India.</span>
                        <br />
                        Dynamic and detail oriented Software Engineer with
                        experience at Rackware Technologies.
                        <br />
                        I have pursued B-tech in Computer Science & Engineering
                        at Walchand College of Engineering, Sangli.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Photography & Editing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Graphic Desining
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Atharva</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
