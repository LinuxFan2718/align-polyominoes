import './App.css';
import Game from './Game';
import Footer from './Footer';

// 14x14 board
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <p>Align Polyminoes</p>
        <Game />
      </header>
      <Footer />
    </div>
  );
}

export default App;
