import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "../components/Button/Button";
import EntrepriseHome from "../components/EntrepriseHome/EntrepriseHome";
import HeaderBox from "../components/HeaderBox/HeaderBox";
const EntrepriseDashboard = () => (
  <div>
    <HeaderBox background="gradient">
      <Col align="center">
        <br />
        <h6>Access Dashboard</h6>
      </Col>
      <EntrepriseHome />
    </HeaderBox>

    <br />
    <br />
  </div>
);

export default EntrepriseDashboard;

// fait