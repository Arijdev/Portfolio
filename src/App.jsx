import React from 'react';
import './App.css';

import NavBar from './compoents/NavBar.jsx';
import Home from './compoents/Home.jsx';
import About from './compoents/About.jsx';
import Skills from './compoents/Skills.jsx';
import Work from './compoents/Work.jsx';
import RoleFitMatcher from './compoents/RoleFitMatcher.jsx';
import ExperienceEducation from './compoents/ExperienceEducation.jsx';
import Certifications from './compoents/Certifications.jsx';
import Contact from './compoents/Contact.jsx';
import Footer from './compoents/Footer.jsx';
import Topbtn from './compoents/Topbtn.jsx';
import AIChatbot from './compoents/AIChatbot.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './compoents/Loginpage.jsx';
import SignUpPage from './compoents/SignUpPage.jsx';
import ForgotPasswordPage from './compoents/ForgotPasswordPage.jsx';
import Tictactoe from './compoents/Tictactoe.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <About />
              <RoleFitMatcher />
              <Skills />
              <Work />
              <ExperienceEducation />
              <Certifications />
              <Contact />
              <Topbtn />
              <AIChatbot />
              <Footer />
            </>
          } 
        />
        <Route path="/tictactoe" element={<><Tictactoe /><Footer /></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
