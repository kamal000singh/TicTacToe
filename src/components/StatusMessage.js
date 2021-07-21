import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el != null);
  return (
    <h3>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next Player is ${current.inXNext ? 'X' : 'O'}`}
      {!winner && noMoveLeft && 'Game Draw'}
    </h3>
  );
};
export default StatusMessage;
