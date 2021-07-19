import React, { useState } from 'react';
import Square from './Square.js';
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  const handleClick = position => {
    if (board[position]) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNext ? 'X' : 'O';
        } else {
          return square;
        }
      });
    });
    setIsNext(prev => !prev);
  };
  const renderEvent = position => {
    return (
      <Square
        value={board[position]}
        onclick={() => {
          handleClick(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderEvent(0)}
        {renderEvent(1)}
        {renderEvent(2)}
      </div>
      <div className="board-row">
        {renderEvent(3)}
        {renderEvent(4)}
        {renderEvent(5)}
      </div>
      <div className="board-row">
        {renderEvent(6)}
        {renderEvent(7)}
        {renderEvent(8)}
      </div>
    </div>
  );
};
export default Board;
