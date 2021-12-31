import Square from './Square';
import { gameConfig } from './gameConfig';
import { useState } from "react";

function boardRow(squares, key) {
  return (<div key={key}>{squares}</div>);
}

function blankBoard() {
  let thisBoard = [];
    for (let row = 0; row < gameConfig["numRows"]; row++) {
      let thisRow = []
      for (let col = 0; col < gameConfig["numCols"]; col++) {
        thisRow.push(<Square 
          key={col}
           />);
      };
      thisBoard.push(boardRow(thisRow, row));
    };
    return thisBoard;
};

function Board() {
  const [board, setBoard] = useState(blankBoard());
  return(<>{board}</>)
}

export default Board;
