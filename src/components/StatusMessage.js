import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el != null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next Player is{' '}
          <span className={current.inXNext ? 'text-green' : 'text-orange'}>
            {current.inXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};
export default StatusMessage;
