import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import DataList from "./components/DataList";
// import { getData } from "./data/Get";

class App extends Component {
  // default state object
  state = {
    dataQR: [],
    data: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/imageReader")
      .then(response => {
        // create an array of data only with relevant data
        const newData = response.data.map(c => {
          return {
            id: c._id,
            name: c.imageMessage
          };
        });
        const newState = Object.assign({}, this.state, {
          dataQR: newData
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));

    axios
      .get("http://localhost:3000/api/rfidreader")
      .then(response => {
        // create an array of data only with relevant data
        const newData = response.data.map(c => {
          return {
            id: c._id,
            name: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          data: newData
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

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
              {"Image reader"}
              <DataList data={this.state.dataQR} />
            </Col>
            <Col>
              {"motion sensor"}
              <DataList data={this.state.data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
