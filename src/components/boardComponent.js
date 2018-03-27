// React
import React from 'react';

// Components
import Square from './squareComponents';


/**
 *  This is the board component who create the ui game, mocking then return;
 *
 * @export
 * @class Board
 * @extends {React.Component}
 */
export default class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }

    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
