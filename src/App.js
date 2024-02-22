import logo from './logo.svg';
import './App.css';
import MultipleSelect from './Componentes/selectListIndustry/selectListIndustry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '100px' }}>Industry</p>
          <MultipleSelect />
        </div>
      </header>
    </div>
  );
}

export default App;
