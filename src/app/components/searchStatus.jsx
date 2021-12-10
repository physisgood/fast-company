import React from "react";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        return number > 4 || number === 1 ? 'человек тусанёт' : 'человека тусанут'
    }
    return <span className={`badge bg-primary`}>{length} {renderPhrase(length)} с тобой сегодня</span>

}

export default SearchStatus