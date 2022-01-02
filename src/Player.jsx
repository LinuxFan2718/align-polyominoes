function Player(props) {
  return(
    <>
      <div><strong>Name</strong> {props.name}</div>
      <div>{props.turn ? <strong>Current Turn</strong> : ""}</div>
      <div>Pieces {props.pieces}</div>
    </>
  )
}

export default Player