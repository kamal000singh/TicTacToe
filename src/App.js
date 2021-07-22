import React, { useState } from 'react';
import { calculateWinner } from './components/Helper';
import Board from './components/Board.js';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import './css/root.scss';
const App = () => {
  const resetGame = [{ board: Array(9).fill(null), inXNext: true }];
  const [history, setHistory] = useState(resetGame);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquare } = calculateWinner(current.board);
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
  const newGame = () => {
    setHistory(resetGame);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <h2>
        <StatusMessage winner={winner} current={current} />
      </h2>
      <Board
        board={current.board}
        handleClick={handleClick}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={newGame}
      >
        START NEW GAME
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};
export default App;
