import React from 'react';
import img1 from '../assets/images/img1.jpg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="title">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Bridging Full-Stack Web Development with Cutting-Edge Agentic AI Systems</p>
      </div>

      <div className="content">
        <div className="column col-left">
          <div className="img-card glass-panel">
            <img src={img1} alt="Arij Chowdhury" />
            <div className="img-badge">
              <i className="fas fa-check-circle"></i> Open to Hire
            </div>
          </div>
        </div>

        <div className="column col-right">
          <h2 className="content-title">Hey There! I'm Arij Chowdhury</h2>
          <h4 className="content-sub-heading">Full Stack Developer & Agentic AI Specialist</h4>
          
          <p className="paragraph-text">
            I am a results-driven <b>Full Stack & Agentic AI Developer</b> completing my B.Tech degree in 
            <b> Information Technology</b> at <b>Maulana Abul Kalam Azad University of Technology (MAKAUT)</b>, West Bengal, 
            maintaining an <b>8.45 / 10 CGPA</b>.
          </p>

          <p className="paragraph-text">
            I specialize in architecting modern web platforms using <b>Next.js, React.js, Node.js, Express.js, and MongoDB</b>, 
            alongside building autonomous AI systems with <b>LangChain, LangGraph, LangSmith, RAG, Deep Agents, guardrails, and vector databases</b>. 
            During my internship at <b>Codtech IT Solutions</b>, I engineered production-grade web applications and optimized performance by 30%.
          </p>

          <div className="why-hire-grid">
            <div className="why-card">
              <i className="fas fa-brain"></i>
              <div>
                <h5>Agentic AI Master</h5>
                <p>LangGraph workflows, stateful multi-agent systems, and RAG architectures.</p>
              </div>
            </div>

            <div className="why-card">
              <i className="fas fa-bolt"></i>
              <div>
                <h5>Production Engineering</h5>
                <p>Engineered live Next.js apps with REST API integration & ~30% faster load speeds.</p>
              </div>
            </div>

            <div className="why-card">
              <i className="fas fa-trophy"></i>
              <div>
                <h5>Global Rank 2832</h5>
                <p>Ranked among global top programmers in TCS CodeVita Season 13.</p>
              </div>
            </div>

            <div className="why-card">
              <i className="fas fa-certificate"></i>
              <div>
                <h5>Micro1 Certified</h5>
                <p>AI Interview Certified in Frontend Web Development + Oracle & NVIDIA certs.</p>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <a href="#experience" className="btn btn-primary">Explore My Experience</a>
            <a href="#contact" className="btn btn-outline">Schedule an Interview</a>
          </div>
        </div>
      </div>
    </section>
  );
}
