import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./item";
import { Col, Container, Row } from "react-bootstrap";
import characters from "./characters";

class Keyboard extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <div className="keyboard-layout" id="panel">
        <Container className="column">
              <Col className="mx-0 column">
                <Item char={"X"} width="100px" onClick={()=> document.getElementById("panel").style.display = "none"} />
              </Col>
            <Col className="delete">
              <Item char="⌫" width="100px" onClick={() => {this.props.handler(this.props.inputText.slice(0, -1)) }}/>
            </Col>
          {characters.map((object) => (
            <Row className="keyboard-row">
              {object.map((objet, index) => (
                <Col className="mx-0 column">
                  <Item image={"Assets/svg/signs/"+objet[1]} char={objet[0]} height={"70px"} onClick={() => {this.props.handler(this.props.inputText + objet[0] ) }} />
                </Col>
              ))}
            </Row>
          ))}
          <Col className="mx-0 column">
            <Item width="200px" onClick={() => this.props.handler(this.props.inputText + " " ) }/>
          </Col>
        </Container>
        {/*
        <Container className="column">
              <Col className="mx-0 column">
                <Item char={"X"} width="100px" onClick={()=> document.getElementById("panel").style.display = "none"} />
              </Col>
            <Col className="delete">
              <Item char="⌫" width="100px" onClick={() => {this.setState({ text: this.state.text.slice(0, -1) }); this.props.handler(this.state.text.slice(0, -1) )}}/>
            </Col>
          {characters.map((object) => (
            <Row className="keyboard-row">
              {object.map((objet, index) => (
                <Col className="mx-0 column">
                  <Item image={"Assets/svg/signs/"+objet[1]} char={objet[0]} height={"70px"} onClick={() => {this.setState({ text: this.state.text + objet[0] }); this.props.handler(this.state.text + objet[0] )}} />
                </Col>
              ))}
            </Row>
          ))}
          <Col className="mx-0 column">
            <Item width="200px" onClick={() => this.setState({ text: this.state.text + " " })}/>
          </Col>
        </Container>
        */}
        {/* <Container>
          {characters.map((object) => {
            <Row>
              {new Map(object).forEach((value, key, map) => {
                return (<Col lg={1}>
                  <Item image={"Assets/svg/signs/alef.svg"} char={"A"} />
                  {console.log("dd", value)}
                </Col>);
              })}
            </Row>;
          })}
        </Container> */}
      </div>
    );
  }
}

export default Keyboard;
