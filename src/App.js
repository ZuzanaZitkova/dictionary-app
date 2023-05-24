import './App.css';
import Dictionary from './Dictionary.js';
function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary defaultWord="sunrise" />
      <footer>
        <p>
          This dictionary website was coded by Zuzana Zitkova and is open
          sourced on{' '}
          <a href="https://github.com/ZuzanaZitkova/dictionary-app">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
