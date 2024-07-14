import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import About from './About/About';
import Navbar from './components/navbar';
import './App.css'
import Footer from './components/footer';
import Sign from './components/sign';
import Contact from './components/contact';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/sign" element={<Sign />}/>
      </Routes>
      <Footer /> 
    </Router>
  );
}
