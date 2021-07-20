import React from 'react';
import Square from './Square.js';
const Board = ({ board, handleClick }) => {
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
