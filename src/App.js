import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './pages/mainScreen';
import CreateSuccessCaseScreen from './pages/createSuccessCaseScreen';
import ProcessContext from './context/process.context';
import SuccessCaseProcessCreationScreen from './pages/successCaseProcessCreationScreen';

function App() {
  return (
    <ProcessContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="NewSuccessCases" element={<SuccessCaseProcessCreationScreen />} />
        </Routes>
      </BrowserRouter>
    </ProcessContext>
  );
}

export default App;