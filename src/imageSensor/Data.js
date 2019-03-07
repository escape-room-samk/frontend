import React from "react";
import PropTypes from "prop-types";
import "./Data.css";

function Data(props) {
  return (
    <div className="contact">
    <p>Question:</p>
    <p><b>{props.question}</b></p>
    <p>your answer is {props.value}</p> 
    <p>Answer is: {props.boolean} </p> 
    </div>
  );
}

Data.propTypes = {
  name: PropTypes.string.isRequired
};

export default Data;
