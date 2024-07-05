import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import About from './About/About';
import Navbar from './components/navbar';
import './App.css'
import Footer from './components/footer';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
