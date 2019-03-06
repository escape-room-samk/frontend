import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
// import Data from "./data/Data";

import "./App.css";

import axios from "axios";
import DataList from "./components/DataList";
// import { getData } from "./data/Get";

class App extends Component {
  // default state object
  state = {
    dataQR: [],
    dataImage: [],
    dataMotion: [],
    dataRFID: []
  };
  componentDidMount() {
    axios
      .get("http://172.17.2.10:3000/api/imageReader")
      .then(response => {
        // create an array of data only with relevant data
        const newData = response.data.map(c => {
          return {
            id: c._id,
            name: c.question
          };
        });
        const newState = Object.assign({}, this.state, {
          dataImage: newData
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));

    axios
      .get("http://172.17.2.10:3000/api/rfidreader")
      .then(response => {
        // create an array of data only with relevant data
        const newData = response.data.map(c => {
          return {
            id: c._id,
            name: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          dataRFID: newData
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));

    axios
      .get("http://172.17.2.10:3000/api/qrreader")
      .then(response => {
        // create an array of data only with relevant data
        const newData = response.data.map(c => {
          return {
            id: c._id,
            name: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          dataQR: newData
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));

    axios
      .get("http://172.17.2.10:3000/api/motionsensor")
      .then(response => {
        // create an array of data only with relevant data
        const newData = response.data.map(c => {
          return {
            id: c._id,
            name: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          dataMotion: newData
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
              {"QR reader"}
              <DataList data={this.state.dataQR} />
            </Col>
            <Col>
              {"motion sensor"}
              <DataList data={this.state.dataMotion} />
            </Col>
            <Col>
              {"RFID sensor"}
              <DataList data={this.state.dataRFID} />
            </Col>
            <Col>
              {"IMAGE sensor"}
              <DataList data={this.state.dataImage} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
