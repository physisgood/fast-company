import React, { useState } from 'react';

const BookMark = (statusNow) => {
  const [status, setStatus] = useState(statusNow);
  const handleClick = () => {
    status ? setStatus(false) : setStatus(true);
  };

  const emptyHeart = (
    <button onClick={handleClick}>
      <i className={'bi bi-heart'} />
    </button>
  );
  const fullHeart = (
    <button onClick={handleClick}>
      <i className={'bi bi-heart-fill'} />
    </button>
  );

  return status ? emptyHeart : fullHeart;
};

export default BookMark;
