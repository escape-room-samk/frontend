import React from "react";
import PropTypes from "prop-types";

// import the Data component
import Data from "./Data";

function DataList2(props) {
  return (
    <div>{props.data.map(c => <Data key={c.devID} question={c.question} id={c.devID} boolean={c.boolean} value={c.value}/>)}</div>
  );
}

DataList2.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataList2;
