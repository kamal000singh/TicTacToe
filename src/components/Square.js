import React from 'react';

const Square = ({ value, onclick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onclick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};
export default Square;
