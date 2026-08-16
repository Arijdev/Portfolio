import React, { useState } from 'react';

const SKILL_CATEGORIES = [
  {
    category: "Agentic AI & Machine Learning",
    icon: "fas fa-brain",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "LangGraph", level: 88 },
      { name: "LangSmith & Guardrails", level: 85 },
      { name: "RAG & Vector Databases", level: 90 },
      { name: "Deep Agents & n8n Workflows", level: 85 },
      { name: "Prompt Engineering & XAI", level: 92 },
      { name: "Python / PyTorch / Scikit-learn", level: 85 },
      { name: "Pandas / NumPy / Matplotlib", level: 88 }
    ]
  },
  {
    category: "Frontend Web Engineering",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS & Bootstrap", level: 88 },
      { name: "Responsive UI & State Management", level: 90 }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "fas fa-server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs & Auth", level: 90 },
      { name: "MongoDB & Supabase", level: 85 },
      { name: "MySQL & SQL Databases", level: 80 }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: "fas fa-cloud",
    skills: [
      { name: "AWS & Microsoft Azure", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel & Netlify", level: 92 },
      { name: "Postman & API Testing", level: 88 },
      { name: "VS Code & System Tuning", level: 95 }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills" id="skills">
      <div className="title">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Comprehensive skill set spanning Agentic AI, modern full-stack web architectures, and cloud services.
        </p>
      </div>

      <div className="skills-tab-nav">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            className={`skill-tab-btn ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <i className={cat.icon}></i> {cat.category}
          </button>
        ))}
      </div>

      <div className="skills-display-card glass-panel">
        <div className="skills-category-header">
          <h3>
            <i className={SKILL_CATEGORIES[activeTab].icon}></i> {SKILL_CATEGORIES[activeTab].category}
          </h3>
          <span className="skills-badge">Verified Proficiency</span>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
            <div key={sIdx} className="skill-progress-box">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <div className="tech-tags-cloud">
          <h4>Key Technical Tokens:</h4>
          <div className="tags-wrapper">
            <span className="tech-chip">LangChain</span>
            <span className="tech-chip">LangGraph</span>
            <span className="tech-chip">Next.js</span>
            <span className="tech-chip">React.js</span>
            <span className="tech-chip">Node.js</span>
            <span className="tech-chip">MongoDB</span>
            <span className="tech-chip">RAG</span>
            <span className="tech-chip">Vector DB</span>
            <span className="tech-chip">TypeScript</span>
            <span className="tech-chip">Python</span>
            <span className="tech-chip">Tailwind CSS</span>
            <span className="tech-chip">AWS</span>
            <span className="tech-chip">Azure</span>
            <span className="tech-chip">n8n</span>
            <span className="tech-chip">Explainable AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
