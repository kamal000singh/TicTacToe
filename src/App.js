import React, { useState } from 'react';
import { calculateWinner } from './components/Helper';
import './css/root.scss';
import Board from './components/Board.js';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isNext ? 'X' : 'O'}`;
  console.log(board);
  const handleClick = position => {
    if (board[position] || winner) {
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
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};
export default App;
