import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";
// import DataList from "../components/DataList";
class imageSensor extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Image Reader</h1>
        </header>
        <Container>
          <Row>
            <Col>
              {"IMAGE sensor"}
              {/* <DataList data={this.state.dataImage} /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default imageSensor