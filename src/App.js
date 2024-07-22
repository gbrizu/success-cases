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
import { Auth0Provider } from "@auth0/auth0-react";
export const UserContext = createContext()

function App() {
  return (
    <Auth0Provider domain="dev-0efequbnpda3f7au.us.auth0.com" clientId="T2Igi7TuY129hwxd84q3b8cs2cIqm5bg" redirectUri={window.location.origin}>
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
              <Route path='*' element={<ErrorScreen />} />
            </Routes>
          </BrowserRouter>
        </CaseViewContext>
      </ProcessContext>
    </Auth0Provider>
  );
}

export default App;
