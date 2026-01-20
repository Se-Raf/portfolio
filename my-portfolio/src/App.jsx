import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import TechStack from './pages/TechStack';
import Contact from './pages/Contact';
import Certification from './pages/Certification';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router basename="/portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
