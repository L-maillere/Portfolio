import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Error from './pages/Error/Error';
import PixiComponent from './components/UtilsComponents/PixiComponent/PixiComponent';
import ScrollToTop from './components/UtilsComponents/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <PixiComponent />
      <ScrollToTop />
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects/:projectUrl" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;