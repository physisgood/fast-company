import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    return number > 4 || number === 1 ? 'человек тусанёт' : 'человека тусанут';
  };
  return (
    <span className={`badge bg-primary`}>
      {length} {renderPhrase(length)} с тобой сегодня
    </span>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;
