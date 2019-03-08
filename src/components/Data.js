import React from "react";
import PropTypes from "prop-types";
import "./Data.css";
import {Redirect} from 'react-router-dom'

function Data(props) {
  if(props.boolean === "True"){
    return(
      <Redirect to='/code_2' />);
  }
  else if(props.value === "KIPPIS"){
    return(
      <Redirect to='/code_complete' />);
  }
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
