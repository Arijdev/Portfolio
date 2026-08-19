import React from 'react';
import resume from '../assets/images/ArijResume.pdf';
import bgImg from '../assets/images/bg.jpg';

export default function Home() {
  return (
    <section
      className="main"
      id="home"
      style={{
        backgroundImage: `var(--hero-overlay), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="home-overlay"></div>
      <div className="content">
        <div className="location-pill">
          <span className="pulse-dot"></span>
          <span>Bengaluru, India | Open to Remote, Relocation & Global Roles</span>
        </div>

        <h2>Hello, I'm<br /><span>Arij Chowdhury</span></h2>

        <div className="animated-text">
          <h3>Agentic AI Developer</h3>
          <h3>Full Stack Developer (Next.js & MERN)</h3>
          <h3>LangGraph & RAG Engineer</h3>
        </div>

        <p className="hero-description">
          Results-driven Software Engineer with hands-on experience building scalable Next.js & MERN web applications,
          autonomous AI agents using <b>LangGraph, LangChain, RAG, Deep Agents, and vector databases</b>.
          Scored <b>8.45/10 CGPA</b> in B.Tech IT & Ranked <b>2832 Globally in TCS CodeVita</b>.
        </p>

        {/* Recruiter Quick Stats Bar */}
        <div className="hero-stats-grid">
          <div className="stat-box">
            <span className="stat-number">8.45</span>
            <span className="stat-label">B.Tech CGPA</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">#2832</span>
            <span className="stat-label">TCS CodeVita Rank</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">Micro1</span>
            <span className="stat-label">AI Certified</span>
          </div>
        </div>

        <div className="hero-cta-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Hire Me Now
          </a>
          <a href={resume} className="btn btn-outline" download="Arij_Chowdhury_Resume.pdf">
            <i className="fas fa-file-download"></i> Download Resume
          </a>
          <a href="#work" className="btn btn-secondary">
            <i className="fas fa-code"></i> View Projects
          </a>
        </div>

        <div className="media-icons">
          <a href="https://in.linkedin.com/in/arij-chowdhury-96ab3b261" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Arijdev" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:arij.chowdhuryr@gmail.com" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
