import Board from './Board';
import StatusArea from './StatusArea';
import { startingPieces } from './startingPieces'
import { useState } from 'react'

function Game() {
  let player1 = {
    "number": 1,
    "name": "Player 1",
    "turn": true,
    "pieces": startingPieces
  }
  let player2 = {
    "number": 2,
    "name": "Player 2",
    "turn": false,
    "pieces": startingPieces
  }
  const [players, setPlayers] = useState([player1, player2])

  return(<>
    <StatusArea players={players} />
    <Board />
  </>)
}

export default Game