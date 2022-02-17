import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualities();
    console.log(qualities);
    return isLoading ? "Loading..." : (
        <>
            {qualities.map((qual) => (
                <Quality key={qual} id={qual} />
            ))}
        </>
    );
    // if (isLoading) return "Loading...";
    // return (
    //     <>
    //         {qualities.map((qual) => (
    //             <Quality key={qual} id={qual} />
    //         ))}
    //     </>
    // );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
