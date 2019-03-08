import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataList from "../components/DataList";
import logo from "../logo.svg";
import axios from "axios";

// import DataList from "../components/DataList";
class RfidReader extends Component {
  state = {
    dataImage: [],
    dataQR: []

  };
  componentDidMount() {
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
          dataImage: newData.reverse()
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
            devID: c.devID,
            boolean: c.boolean
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
                <DataList data={this.state.dataImage} />
              </div>
            </Col>
            <Col>
              {"QR reader"}
              <DataList data={this.state.dataQR} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default RfidReader;
