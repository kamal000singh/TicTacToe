import React from 'react';

const Square = ({ value }) => {
  return (
    <button
      type="button"
      style={{ width: '100px', height: '100px', fontSize: '50px' }}
    >
      {value}
    </button>
  );
};
export default Square;
