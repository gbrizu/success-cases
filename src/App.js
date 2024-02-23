import logo from './logo.svg';
import './App.css';
import SelectListClients from './components/selectListClients/selectListClients';

function App() {
  const opciones = ['1','2'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SelectListClients options={opciones}/>
      </header>
    </div>
  );
}

export default App;
