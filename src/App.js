import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
// import { getData } from "./data/Get";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ESCAPE ROOM</h1>
        </header>
        <Container>
          <h1>Welcome to the Escapre Room</h1>
        </Container>
      </div>
    );
  }
}

export default App;
