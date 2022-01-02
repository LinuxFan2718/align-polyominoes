import Players from './Players';

function StatusArea(props) {

  return(<>
    Status Area
    <Players players={props.players} />
  </>)
}

export default StatusArea