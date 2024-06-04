import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
