import './App.css';
import Dictionary from './Dictionary.js';
function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        <p>
          This dictionary website was coded by Zuzana Zitkova nd is open sourced
          on{' '}
          <a href="https://github.com/ZuzanaZitkova/dictionary-app">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
