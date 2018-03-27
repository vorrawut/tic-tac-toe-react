import React from 'react';

/**
 * This is the squere object using to store the state and value.
 *
 * @class Square
 * @extends {React.Component}
 */
export default class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }

    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
           {this.state.value}
        </button>
      );
    }
  }
