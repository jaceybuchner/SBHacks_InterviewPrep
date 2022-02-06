import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RecordingPage from './components/RecordingPage'
import QuestionsPage from './components/QuestionsPage'
import ResultPage from './components/ResultPage'
import Home from './components/Home'
import LinksPage from './components/LinksPage'

import OurNavbar from './components/OurNavbar';

function App() {

  return (
    <div className="App">
      <Router>
        <OurNavbar/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/interview" component={RecordingPage} />
          <Route path="/question" component={QuestionsPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/links" component={LinksPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;