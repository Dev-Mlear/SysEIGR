import React from "react";
import { Col, Card } from "react-bootstrap";
import { withRouter, useHistory } from "react-router-dom";
import "./styles.css";

class RegisterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.history.push("/Login");
    event.preventDefault();
  }
  render() {
    return (
      <div>
      <Col className="col-register">
        <Card className="styledCard-register">
          <Card.Img variant="top" src="" className="image" />
          <Card.Body className="body-register">
            <Card.Title className="title-register">
              <h6>Register Account!</h6>
            </Card.Title>
            <Card.Text className="text-register">
              For the purpose of industry regulation, your details are required.
            </Card.Text>
            <hr />
            <form>
              <div className="form-group-register">
                <label>Your Fullname*</label>
                <input
                  type="text"
                  className="form-control-register"
                  placeholder="Fullname"
                />
              </div>
              <br />
              <div className="form-group-register">
                <label>Your Email*</label>
                <input
                  type="email"
                  className="form-control-register"
                  placeholder="Enter email"
                />
              </div>
              <br />
              <div className="form-group-register">
                <label>Create Password*</label>
                <input
                  type="password"
                  className="form-control-register"
                  placeholder="Enter password"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-lg btn-block">
                Register Account
              </button>
              <p className="forgot-password-register text-right">
                Already registered <a href="/Login">log in?</a>
              </p>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </div>
    );
  }
}


export default withRouter(RegisterCard);


// handleChange   handleSubmit     Render