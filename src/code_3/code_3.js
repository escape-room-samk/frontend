import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataList from "../components/DataList";
import logo from "../logo.svg";
import axios from "axios";
import Iframe from "react-iframe";

// import DataList from "../components/DataList";
class RfidReader extends Component {
  state = {
    RfidData: [],
    dataMotion: []
  };
  componentDidMount() {
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
            .splice(newData.length - 2, newData.length - 1)
            .reverse()
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
    axios
      .get("http://172.17.2.10:3000/api/rfidReader")
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
          RfidData: newData
          .splice(newData.length - 1, newData.length - 1)
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
            <Col xs="3">
              {"RFID Reader"}
              <div>
                <DataList data={this.state.RfidData} />
              </div>
            </Col>
            <Col xs="3">
              {"Motion Cam"}
              <div>
                <DataList data={this.state.dataMotion} />
              </div>
            </Col>
            <Col xs="3">
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
          </Row>
        </Container>
      </div>
    );
  }
}
export default RfidReader;
