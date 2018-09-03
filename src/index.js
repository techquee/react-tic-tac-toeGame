import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Board from './Board';
import './index.css';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Header />
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
