import "./App.css";
import Board from "./Components/Board";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Tic Tac Toe</h1>
        <p>Play a quick match with a friend.</p>
      </header>
      <Board />
    </div>
  )
}

export default App;
