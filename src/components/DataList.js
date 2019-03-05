import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import Contact from "./Data";

function DataList(props) {
  return (
    <div>{props.data.map(c => <Contact key={c.id} name={c.name} />)}</div>
  );
}

DataList.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataList;
