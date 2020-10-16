import React from 'react';

// Delete the constructor from Square
// because Square no longer keeps track of the game’s state!

// function() for the components that do not have their own state -for better undestanding!
// it only returns what should be rendered to the parent class, or in this case to the BOARD.js
function Square(props){
  debugger;
  return(
    <button className="square" onClick={ props.onClick }>
    { props.value }
    </button>
  );
}


export default Square;
