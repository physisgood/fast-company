import React from "react";
import PropTypes from "prop-types";

const Arro = ({ selectedSort }) => {
  // console.log(selectedSort.order);
  return (
    <i className={"bi bi-caret-" + (selectedSort.order === "asc" ? "down-fill" : "up-fill")} />
  );
};

Arro.propTypes = {
  selectedSort: PropTypes.object
};

export default Arro;
// <i className="bi bi-caret-up-fill" />
// <i className="bi bi-caret-down-fill" />;
