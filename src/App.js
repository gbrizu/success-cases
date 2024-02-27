import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './pages/mainScreen';
import { createContext } from 'react';
import CreateSuccessCaseScreen from './pages/createSuccessCaseScreen';

export const UserContext = createContext()

function App() {
  return (
    <UserContext.Provider value={{ name: "Matias", lastName: "Crack" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="NewSuccessCases" element={<CreateSuccessCaseScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
