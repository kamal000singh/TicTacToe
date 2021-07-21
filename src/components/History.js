import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
                color: move === currentMove ? 'red' : 'black',
                backgroundColor:
                  move === currentMove ? 'yellow' : 'transparent',
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to Game Start' : `Go to Move # ${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default History;
