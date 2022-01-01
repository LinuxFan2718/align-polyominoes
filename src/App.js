import './App.css';
import Board from './Board';
import Footer from './Footer';

// 14x14 board
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <p>Align Polyminoes</p>
        <Board />
      </header>
      <Footer />
    </div>
  );
}

export default App;
