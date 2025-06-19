// filename: App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Solutions from './components/LandingPage/Solutions';
import Workflows from './components/LandingPage/Workflows';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/workflows" element={<Workflows />} />
      </Routes>
    </Router>
  );
}