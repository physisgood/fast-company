import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ setUser, clear }) => {
    return (
        <div className={"w-100 mx-auto"}>
            <input
                id={"entry"}
                type="text"
                className={"w-100 mx-auto"}
                placeholder={"Search..."}
                onChange={e => setUser(e.target.value)}
                onClick={clear}
            />
        </div>
    );
};

SearchBar.propTypes = {
    setUser: PropTypes.func,
    clear: PropTypes.func
};

export default SearchBar;
