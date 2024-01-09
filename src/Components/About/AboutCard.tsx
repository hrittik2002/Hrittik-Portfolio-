import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hrittik Garain </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently employed as a software developer at Xempla.
            <br />
            Currently, I am persuing Btech in Computer Science and Engineering at BPPIMT Kolkata.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listning Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Investment
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyone is looking for the hack, the secret to success without hard work..."{" "}
          </p>
          <footer className="blockquote-footer">Sam Altman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
