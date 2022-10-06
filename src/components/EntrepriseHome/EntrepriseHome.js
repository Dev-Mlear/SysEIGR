import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./styles.css";

const EntrepriseHome = () => {
  return (
    <div className="container">
      <div>
        <Row className="row justify-content-md-center buttonsColumn">
          <Col lg={5}>
            <img src="Assets/svg/client.svg" width="90%" />
            <Link to="/ChatRoomRes">
            <Button text={"white"} width={"20rem"}>
              Système Interrogatoire
            </Button>
                  </Link>
          </Col>
          <Col lg={1}>
            <div className="vl" />
          </Col>
          <Col lg={5}>
            <img src="Assets/svg/manager.svg" width="90%" />
            <Link to="/RasControl">
                   
            <Button text={"white"} width={"20rem"}>
              Historique
            </Button>
                  </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EntrepriseHome;
