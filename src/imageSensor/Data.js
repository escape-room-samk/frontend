import React from "react";
import PropTypes from "prop-types";
import "./Data.css";

function Data(props) {
  if(props.boolean === "true"){
    var bgColor="lightGreen"
  }
  else{
    bgColor="Red"
  }
  return (
    <div className="contact" style={{backgroundColor: bgColor}}>
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
