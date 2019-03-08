import React from "react";
import PropTypes from "prop-types";
import "./Data.css";

function Data(props) {
  return (
    <div className="contact">
    <h6>{props.devID} </h6>
    <p><b>{props.question}</b></p>
    <p>{props.value}</p> 
    <p>{props.boolean} </p> 
   

    </div>
  );
}

Data.propTypes = {
  name: PropTypes.string.isRequired
};

export default Data;
