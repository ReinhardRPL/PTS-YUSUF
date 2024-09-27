import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../src/Component/ScrollToTop';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Accessories from './pages/Accessories'
import Collections from "./pages/Collections";
import About from "./pages/About";
import Login from "./pages/Login";
import './App.css'; 
import './index.css'; 

function App() {
  return (
    <Router>

    <ScrollToTop />
      <Routes>

      
     
        <Route path="/" element={<Home />} />

        <Route path="home" element={<Home />} />

        <Route path="cars" element={<Cars />} />

        <Route path="/accessories" element={<Accessories />} />

        <Route path="/Collections" element={<Collections />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
     
       
      </Routes>
     </Router>
  );
}

export default App;