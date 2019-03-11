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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h1>Welcome to the Escape Room</h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh"
            }}
          >
            <h1>
              <a href="/code_1">Start the game</a>
            </h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
