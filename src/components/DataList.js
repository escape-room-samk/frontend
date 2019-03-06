import React from "react";
import PropTypes from "prop-types";

// import the Data component
import Data from "./Data";

function DataList(props) {
  return (
    <div>{props.data.map(c => <Data key={c.id} name={c.name} id={c.id} />)}</div>
  );
}

DataList.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataList;
