import React from "react";
import PropTypes from "prop-types";
import "./Data.css";

function Data(props) {
  return (
    <div className="contact">
    <p>message</p>
      <span>{props.name}</span>
      <p>DevID</p>
      <span>{props.id}</span>
    </div>
  );
}

Data.propTypes = {
  name: PropTypes.string.isRequired
};

export default Data;
