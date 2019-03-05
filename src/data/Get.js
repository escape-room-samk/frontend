import axios from "axios";

const BACKEND_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3000";

  export function getData(api) {
  axios
    .get(BACKEND_URL+ api)
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
}

export default getData;
