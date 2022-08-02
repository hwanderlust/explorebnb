import './App.css';
import "ui/Button"

function App() {
  return (
    <div className="App">
      React App
      <wired-button elevation={3}>
        <span style={{color: 'red'}}>test</span>
        {/* some components have css variables set available for overriding */}
      </wired-button>
    </div>
  );
}

export default App;
