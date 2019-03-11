import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";

// import DataList from "../components/DataList";
class RfidReader extends Component {
  state = {
    dataImage: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ESCAPE ROOM</h1>
        </header>
        <Container>
          <h1>COMPLETE</h1>
        </Container>
      </div>
    );
  }
}
export default RfidReader;
