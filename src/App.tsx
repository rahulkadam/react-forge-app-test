import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import AITutorial from './pages/AITutorial';
import LLMAgent from './pages/LLMAgent';
import BuildingLLMAgent from './pages/BuildingLLMAgent';
import Foundation from './pages/foundation';
import PythonModule from './pages/python-module';
import Professional from './pages/Professional';
import Expert from './pages/Expert';
import Roadmap from './pages/Roadmap';
import AITools from './pages/AITools';
import PromptEngineering from './pages/PromptEngineering';
import AIBasics from './pages/ai-basics';
import ChatGPTGuide from './pages/ai-basics/chatgpt-guide';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/ai-tutorial" element={<AITutorial />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/python-module" element={<PythonModule />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/expert" element={<Expert />} />
            <Route path="/llm-agent" element={<LLMAgent />} />
            <Route path="/llm-agent/building" element={<BuildingLLMAgent />} />
            <Route path="/BuildingLLMAgent" element={<BuildingLLMAgent />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/prompt-engineering" element={<PromptEngineering />} />
            <Route path="/ai-basics" element={<AIBasics />} />
            <Route path="/ai-basics/chatgpt-guide" element={<ChatGPTGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;