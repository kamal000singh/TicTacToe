import React from 'react';
import './css/root.scss';
import Header from './components/Header.js';
import Board from './components/Board.js';
const App = () => {
  return (
    <div className="app">
      <Header />
      <Board />
    </div>
  );
};
export default App;
