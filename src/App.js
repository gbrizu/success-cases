import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./pages/mainScreen";
import CreateSuccessCaseScreen from "./pages/createSuccessCaseScreen";
import ProcessContext from "./context/process.context";
import SuccessCaseProcessCreationScreen from "./pages/successCaseProcessCreationScreen";
import CaseInfo from "./components/caseInfo/caseInfo";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './pages/mainScreen';
import { createContext } from 'react';
import CreateSuccessCaseScreen from './pages/createSuccessCaseScreen';
import CaseDetails from './components/caseDetails/caseDetails';
import CaseInfo from './components/caseInfo/caseInfo';

export const UserContext = createContext()

function App() {
  return (
    <ProcessContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route
            path="NewSuccessCases"
            element={<SuccessCaseProcessCreationScreen />}
          />
          <Route path="prub" element={<CaseDetails client={{ name: "Hola", industry: "Hola", projectType: "Hola", offering: "Hola", dateRange: "Hola", mail: "Hola", teamSize: "Hola" }} />} />
          <Route path="prub/info" element={<CaseInfo />} />
        </Routes>
      </BrowserRouter>
    </ProcessContext>
  );
}

export default App;
