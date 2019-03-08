import React from "react";
import PropTypes from "prop-types";
import "./Data.css";
import {Redirect} from 'react-router-dom'

function Data(props) {
  if(props.boolean === "true"){
    var bgColor="lightGreen"
  }
  else if(props.boolean === "false"){
    bgColor="Red"
  }
  else if(props.boolean ==="question"){
    bgColor="lightBlue"
  }
  else if(props.boolean ==="win"){
    return(
      <Redirect to='/code_3' />);
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
