import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";
import "../App.css";
import Iframe from "react-iframe";
import axios from "axios";
import DataList from "../components/DataList";
// import { getData } from "./data/Get";

class code_overvieuw extends Component {
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
            devID: c.devID,
            question: c.question,
            boolean: c.boolean,
            value: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          dataImage: newData
            .splice(newData.length - 5, newData.length - 1)
            .reverse()
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
            value: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          dataRFID: newData
            .splice(newData.length - 5, newData.length - 1)
            .reverse()
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
            value: c.value,
            devID: c.devID
          };
        });
        const newState = Object.assign({}, this.state, {
          dataQR: newData
            .splice(newData.length - 5, newData.length - 1)
            .reverse()
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
            value: c.value
          };
        });
        const newState = Object.assign({}, this.state, {
          dataMotion: newData
            .splice(newData.length - 5, newData.length - 1)
            .reverse()
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
          <h1 className="App-title">ESCAPE ROOM</h1>
        </header>

        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Iframe
                url="http://172.17.2.25:8000"
                width="640px"
                height="500px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </Col>
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default code_overvieuw;
