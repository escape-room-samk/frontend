import React from "react";
import PropTypes from "prop-types";
import "./Data.css";

function Contact(props) {
  return (
    <div className="contact">
      <span>{props.name}</span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
