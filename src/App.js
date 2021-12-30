import './App.css';
import Board from './Board';

// 14x14 board
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Align Polyminoes
        </p>
        <Board></Board>
      </header>
    </div>
  );
}

export default App;
