import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RecordingPage from './components/RecordingPage'
import QuestionsPage from './components/QuestionsPage'
import Home from './components/Home'
import LinksPage from './components/LinksPage'
import OurNavbar from './components/OurNavbar';

function App() {

  return (
    <div className="App">
      <Router>
        <OurNavbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/interview" element={<RecordingPage/>} />
          <Route exact path="/question" element={<QuestionsPage/>} />
          <Route exact path="/links" element={<LinksPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;