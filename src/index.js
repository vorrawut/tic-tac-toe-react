// React lib
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Components
import Board from './boardComponent';


 /**
  * This is main class of game.
  *
  * @class Game
  * @extends {React.Component}
  */
 class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
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
