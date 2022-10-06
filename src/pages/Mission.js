import React from "react";
import { Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import CardGrid from "../components/CardGrid/CardGrid";
const Mission = () => (
  <div>
    <HeaderBox background="gradient">
      <Col lg={6} className="h-100 my-auto">
        <h6>
          The number of deaf-mutes in the world are calculated to be from
          700,000 to 900,000, and of these 63 percent, are said to be born deaf,
          the others losing their hearing by different accidents.
        </h6>
      </Col>
      <Col></Col>
      <Col lg={3}>
        <img src="Assets/svg/chartpie.svg" width="70%" />
      </Col>
    </HeaderBox>
    <br />
    <br />
    <CardGrid />
    <br />
    <br />
  </div>
);

export default Mission;

// fait