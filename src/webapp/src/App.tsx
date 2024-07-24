import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ConfigPage from "./pages/ConfigPage/ConfigPage.tsx"
import ScoreKeeping from "./pages/ScoreKeeping/ScoreKeeping.tsx"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfigPage />} />
        <Route path="/ScoreKeeping" element={<ScoreKeeping />} />
      </Routes>
    </Router>
  );
}

export default App
