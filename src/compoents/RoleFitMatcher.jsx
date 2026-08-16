import React, { useState } from 'react';

const ROLES_DATA = [
  {
    id: "agentic-ai",
    title: "Agentic AI / LLM Engineer",
    icon: "fas fa-brain",
    matchScore: "100%",
    summary: "Arij has proven experience building stateful, multi-agent AI systems with LangGraph, LangChain, RAG, vector stores, and guardrails.",
    skills: ["LangGraph & LangChain", "RAG & Vector DBs", "Deep Agents & Guardrails", "Python / PyTorch", "n8n Automation", "Explainable AI (XAI)"],
    topProjects: ["Autonomous Research & Report Agent", "Multi-Agent Ops Assistant", "Zero-Day Guard Malware Detection"],
    recruiterPitch: "Arij doesn't just call basic LLM APIs—he builds production-ready multi-agent graphs with persistent state, fallback routines, and context-aware retrieval."
  },
  {
    id: "full-stack",
    title: "Full Stack Developer (Next.js & MERN)",
    icon: "fas fa-layer-group",
    matchScore: "100%",
    summary: "Expert in building scalable end-to-end web applications with Next.js, React, Node.js, Express, and MongoDB.",
    skills: ["Next.js & React.js", "Node.js & Express.js", "MongoDB & REST APIs", "TypeScript & ES6+", "State Management", "Tailwind CSS"],
    topProjects: ["Mystery Box E-commerce Platform", "Autonomous Research Agent Frontend", "AI Roast You Web App"],
    recruiterPitch: "Engineered 2 production Next.js web applications during his internship at Codtech IT Solutions, reducing load time by ~30%."
  },
  {
    id: "frontend",
    title: "Frontend Web Developer",
    icon: "fas fa-laptop-code",
    matchScore: "100%",
    summary: "Micro1 AI Interview Certified in Frontend Web Development with focus on responsive UI/UX, reusable component design, and speed optimization.",
    skills: ["React.js & Next.js", "TypeScript & JavaScript", "Tailwind CSS & Glassmorphism", "Performance Optimization", "Web Speech API & Canvas"],
    topProjects: ["Voice Typing App", "Interactive Canvas Sketch Board", "Glassmorphic Auth System"],
    recruiterPitch: "Micro1 AI Interview Certified frontend specialist with high attention to pixel-perfect design, lazy loading, and state management."
  }
];

export default function RoleFitMatcher() {
  const [selectedRoleId, setSelectedRoleId] = useState("agentic-ai");

  const currentRole = ROLES_DATA.find((r) => r.id === selectedRoleId);

  return (
    <section className="role-fit-section" id="role-fit">
      <div className="title">
        <h2 className="section-title">Recruiter Role-Fit Calculator</h2>
        <p className="section-subtitle">
          Select the position you are hiring for to see why Arij Chowdhury is a 100% candidate match.
        </p>
      </div>

      <div className="role-selector-tabs">
        {ROLES_DATA.map((role) => (
          <button
            key={role.id}
            className={`role-tab-btn ${selectedRoleId === role.id ? 'active' : ''}`}
            onClick={() => setSelectedRoleId(role.id)}
          >
            <i className={role.icon}></i>
            <span>{role.title}</span>
          </button>
        ))}
      </div>

      <div className="role-fit-display glass-panel">
        <div className="role-fit-header">
          <div className="role-title-info">
            <i className={currentRole.icon}></i>
            <div>
              <h3>{currentRole.title}</h3>
              <p className="role-summary">{currentRole.summary}</p>
            </div>
          </div>
          <div className="match-badge">
            <span className="match-percent">{currentRole.matchScore}</span>
            <span className="match-label">Candidate Match</span>
          </div>
        </div>

        <div className="role-fit-body">
          <div className="role-fit-col">
            <h4><i className="fas fa-check-circle"></i> Key Skills for This Role</h4>
            <div className="role-skills-tags">
              {currentRole.skills.map((skill, sIdx) => (
                <span className="role-skill-chip" key={sIdx}>
                  <i className="fas fa-star"></i> {skill}
                </span>
              ))}
            </div>

            <h4 className="mt-20"><i className="fas fa-cubes"></i> Relevant Portfolio Projects</h4>
            <ul className="role-projects-list">
              {currentRole.topProjects.map((proj, pIdx) => (
                <li key={pIdx}><i className="fas fa-arrow-right"></i> {proj}</li>
              ))}
            </ul>
          </div>

          <div className="role-fit-col pitch-col">
            <div className="pitch-box">
              <h4><i className="fas fa-user-tie"></i> Why Hire Arij For This Position?</h4>
              <p className="pitch-text">"{currentRole.recruiterPitch}"</p>
              
              <div className="pitch-highlights">
                <div><i className="fas fa-award"></i> <strong>CGPA:</strong> 8.45 / 10</div>
                <div><i className="fas fa-trophy"></i> <strong>CodeVita Rank:</strong> 2832</div>
                <div><i className="fas fa-certificate"></i> <strong>Certifications:</strong> Micro1, Oracle, AWS, Azure</div>
              </div>

              <a href="#contact" className="btn btn-primary full-width-btn">
                <i className="fas fa-calendar-check"></i> Schedule Interview for {currentRole.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
