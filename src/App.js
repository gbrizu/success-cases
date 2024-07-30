import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./pages/mainScreen";
import ProcessContext from "./context/process.context";
import SuccessCaseProcessCreationScreen from "./pages/successCaseProcessCreationScreen";
// import CaseInfo from "./components/caseInfo/caseInfo";
import './App.css';
import { createContext } from 'react';
// import CreateSuccessCaseScreen from './pages/createSuccessCaseScreen';
// import CaseDetails from './components/caseDetails/caseDetails';
import CaseViewContext from "./context/casesView.context";
import CaseViewProcessScreen from "./pages/caseViewProcessScreen";
import ErrorScreen from "./pages/errorScreen";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./components/button/ProtectedRoute";
import ChatbotScreen from "./pages/chatbotScreen";
export const UserContext = createContext();

function App() {
  return (
    <Auth0Provider
      domain="challenge-3.us.auth0.com"
      clientId="mxZ6wKxWapWVUtCUHRGsiPbfmfyCgK3Z"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://challenge-3.us.auth0.com/api/v2/'
      }}>
      <ProcessContext>
        <CaseViewContext>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<ProtectedRoute component={MainScreen} />}
              />
              <Route
                path="NewSuccessCases"
                element={<ProtectedRoute component={<SuccessCaseProcessCreationScreen />} />}
              />
              <Route
                path="succesCase/:id"
                element={<ProtectedRoute component={<CaseViewProcessScreen />} />}
              />
              <Route path="chatbot" element={<ProtectedRoute component={<ChatbotScreen />} />} />
              <Route path='*' element={<ErrorScreen />} />
            </Routes>
          </BrowserRouter>
        </CaseViewContext>
      </ProcessContext>
    </Auth0Provider>
  );
}
export default App;
