import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-bootstrap";

import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";
import { Col, Row } from "react-bootstrap";

export default function TeamCard({ child }) {
  return (
    <div className="teamcard">
      <div className="profile-card-2">
        <img src={child.image} className="img img-responsive" />
        <div className="profile-content">
          <Row>
            <Col lg={8}>
              <div className="profile-name">{child.name}</div>
            </Col>
            <Col lg={4} className="d-flex flex-row-reverse">
              <div className="profile-icons">
                <a href={child.facebook} target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="fa" />
                </a>
                <a href={child.twitter} target="_blank">
                  <FontAwesomeIcon icon={faTwitter} className="fa" />
                </a>
                <a href={child.linkedin} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="fa" />
                </a>
              </div>
            </Col>
          </Row>

          <div className="profile-position">{child.position}</div>
        </div>
      </div>
    </div>
  );
}
