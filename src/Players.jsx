import Player from './Player'

function Players(props) {
  return (
    <>
      { props.players.map(
        (player)=><Player key={player.number} name={player.name} turn={player.turn} pieces={player.pieces} />
        ) }
    </>
  )
}

export default Players