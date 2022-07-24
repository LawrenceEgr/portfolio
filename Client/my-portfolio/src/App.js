
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume/>} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        
         
      </Routes>
    <Footer/>
    </div>
  );
  
}

export default App;
