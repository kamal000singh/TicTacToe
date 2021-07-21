import React, { useState } from 'react';
import { calculateWinner } from './components/Helper';
import Board from './components/Board.js';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import './css/root.scss';
const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), inXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  // console.log(winner);
  const handleClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return current.inXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, inXNext: !last.inXNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>
        <StatusMessage winner={winner} current={current} />
      </h2>
      <Board board={current.board} handleClick={handleClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
