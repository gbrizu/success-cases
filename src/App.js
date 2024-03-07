import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./pages/mainScreen";
import ProcessContext from "./context/process.context";
import SuccessCaseProcessCreationScreen from "./pages/successCaseProcessCreationScreen";
import CaseInfo from "./components/caseInfo/caseInfo";
import './App.css';
import { createContext } from 'react';
import CreateSuccessCaseScreen from './pages/createSuccessCaseScreen';
import CaseDetails from './components/caseDetails/caseDetails';
import CaseViewContext from "./context/casesView.context";
import CaseViewProcessScreen from "./pages/caseViewProcessScreen";
import ErrorScreen from "./pages/errorScreen";

export const UserContext = createContext()

function App() {
  return (
    <ProcessContext>
      <CaseViewContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route
              path="NewSuccessCases"
              element={<SuccessCaseProcessCreationScreen />}
            />
            <Route path="succesCase/:id" element={<CaseViewProcessScreen />} />
            <Route path='*' element={<ErrorScreen/>} />
          </Routes>
        </BrowserRouter>
      </CaseViewContext>
    </ProcessContext>
  );
}

export default App;
