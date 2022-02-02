import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    const { isLoading, getQuality } = useQualities();
    const qual = getQuality(id);
    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + qual.color} key={id}>
                {qual.name}
            </span>
        );
    } else return "loading...";
};
Quality.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
};

export default Quality;
