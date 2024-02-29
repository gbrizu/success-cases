import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataTable from './components/dataTable/dataTable';
import MainLayout from './components/MainLayout';
import MainLayout2 from './components/MainLayout2';
import EditionUtils from './components/editionModeUtils/editionModeUtils';

function App() {
  const options = ['1','2'];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="layout2" element={<MainLayout2 />} />
        <Route path="layout3" element={<EditionUtils />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;