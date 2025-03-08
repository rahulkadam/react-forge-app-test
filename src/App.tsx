import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forge-tutorial" element={<Tutorial />} />
            <Route path="/ai-tutorial" element={<AITutorial />} />
            <Route path="/llm-agent" element={<LLMAgent />} />
            <Route path="/llm-agent/building" element={<BuildingLLMAgent />} />
            <Route path="/BuildingLLMAgent" element={<BuildingLLMAgent />} />
            <Route path="/about" element={<About />} />
            {/* New Routes */}
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/foundation/python" element={<PythonModule />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/expert" element={<Expert />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/ai-tools" element={<AITools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;