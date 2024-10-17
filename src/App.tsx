import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CharactersPage from './components/CharactersPage';
import ComicsPage from './components/ComicsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/characters" replace />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsPage />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
