import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_URL || "http://172.17.2.10:3000";

function getData(api) {
  axios
    .get(BACKEND_URL + api)
    .then(response => {
      // create an array of data only with relevant data
      const newData = response.data.map(c => {
        return c;
      });
      const newState = Object.assign({}, this.state, {
        data: newData
      });
      this.setState(newState);
    })
    .catch(error => console.log(error));
    return data
}

function getImage() {
  return new Promise((resolve, reject) => {
    axios
      .get(BACKEND_URL + "/api/imageReader")
      .then(results => {
        const image = results.data.map(element => {
          return element;
        });
        resolve(image);
      })
      .catch(error => {
        console.log(error);
        reject();
      });
  });
}

export default {getData,getImage};
