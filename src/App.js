import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecognitionPage from './pages/RecognitionPage';
import EducationPage from './pages/EducationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
