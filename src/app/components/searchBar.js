import React, { useState } from "react";

const SearchBar = () => {
    const getFilteredUsers = (query, users) => {
        if (!query) {
            return users;
        }
        return users.filter(user => user.name.includes(query));
    };
    const [value, setValue] = useState("");

    return (
        <div className={"w-100 mx-auto"}>
            <input
                type="text"
                className={"w-100 mx-auto"}
                placeholder={"Search..."}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
