import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import MainLayout2 from './components/MainLayout2';
import MultipleSelect from './Componentes/selectListIndustry/selectListIndustry';

function App() {
  const options = ['1','2'];
  return (
    <MultipleSelect>MultipleSelect</MultipleSelect>


  );
}

export default App;
