import React from 'react';
import Square from '../components/Square';

class Board extends React.Component {
  constructor(props){
    super(props);

    // init state
    this.state = {
      squares: Array(9).fill(null),
      xIsNext:true,
    }
  }

  handleClick(i){
    debugger;
    // making a copy of this state array
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]){
      return;
    }

    // if xIsNext=true then 'x', if not the 'o'
    //squares[i]= this.state.xIsNext ? 'X' : 'O';
    if(this.state.xIsNext){
      squares[i] = "X";

      var comp = randomNumber(1,9, squares);
      debugger;

      squares[comp] = "O";

    }
    // updating the state
    this.setState({
      squares: squares, // updates the array
      xIsNext: this.state.xIsNext, // updates the X value to true or false
    });
  }


  renderSquare(i) {
    return <Square
    // passing down two props to the Square component: VALUE and onClick();
    value={ this.state.squares[i] }
    onClick={ () => this.handleClick(i) }
    />
  }

  render() {
    // changing the status of which player takes turn
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner){
      status = 'Winner is: ' + winner;
    } else {
      //  status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }


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

function calculateWinner(squares) {
  // possible values for the winner of this game
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// comp func for 'O'
function randomNumber(min, max, squares) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  if(squares[num] == null){
    return num;
  }
  for (var i=0 ; i < squares.length; i++){
    if(squares[i] == null){
      num = i;
      break;
    }
  }
  return num;
}

export default Board;
