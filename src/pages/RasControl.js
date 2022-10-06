import React from "react";
import { Button, Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import Record from "../components/Button/Record";
import RaspberryScreen from "../components/RaspberryScreen/RaspberryScreen";
import Speech2text from "../components/Speech2text/Speech2text";

const RasControl = () => (
  <div>
    <HeaderBox background="gradient">
        <h6>Client Dashboard</h6>
      <Record />
      <RaspberryScreen/>
    </HeaderBox>
  </div>
);

export default RasControl;
