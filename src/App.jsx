import { useState } from 'react'

import './App.css'
import NavBar from './compoents/NavBar.jsx'
import Home from './compoents/Home.jsx'
import About from './compoents/About.jsx'
import Skills from './compoents/Skills.jsx'
import Work from './compoents/Work.jsx'
import Contact from './compoents/Contact.jsx'
import Footer from './compoents/Footer.jsx'
// import Transletor from './compoents/Transletor.jsx'
import Topbtn from './compoents/Topbtn.jsx'
import Tictactoe from './compoents/Tictactoe.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './compoents/Loginpage.jsx';
import SignUpPage from './compoents/SignUpPage.jsx';
import ForgotPasswordPage from './compoents/ForgotPasswordPage.jsx';
import Voicetype from './compoents/VoiceTyping.jsx';
import Digitalbord from './compoents/DigitalBord.jsx';
import DigitalSkatch from './compoents/DigitalSketch.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
<Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
              <Topbtn />
              <Footer />
            </>
          } 
        />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/voicetyping" element={<><Voicetype/> <Footer /></>}/>
        <Route path="/Digitalnote" element={<><Digitalbord/> <Footer /></>}/>
        <Route path="/DigitalSkatch" element={<><DigitalSkatch/> <Footer /></>}/>
      </Routes>
    </Router>

  )
}

export default App
