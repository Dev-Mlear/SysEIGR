import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import data from "../data";
import TeamCard from "../TeamCard";
import "./styles.css";

const TeamGridSection = () => {
  return (
    <div className="container">
      <div>
        <h5 className="section-title">Team</h5>
        <hr className="hrline" />
        <p className="section-description">
          Meet our dedicated team working full time to innovate and solve social
          problems with technology.
        </p>
        <br />
        <br />
      </div>
      <Row md={3} className="justify-content-md-center">
        {data.map((index) => (
          <Col>
            <TeamCard child={index} />
          </Col>
        ))}
      </Row>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TeamGridSection;
