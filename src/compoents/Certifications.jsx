import React from 'react';

const CERTS = [
  {
    title: "Oracle Agentic AI Foundations",
    issuer: "Oracle",
    category: "Agentic AI",
    icon: "fas fa-brain",
    desc: "Foundational mastery in building autonomous AI agent architecture, vector indices, and Enterprise AI orchestration."
  },
  {
    title: "Build Reliable Agentic AI Applications",
    issuer: "Agentic AI / Industry Standard",
    category: "Agentic AI",
    icon: "fas fa-cogs",
    desc: "Designing resilient LangGraph workflows, memory persistence, fallback handlers, and deterministic guardrails."
  },
  {
    title: "NVIDIA Prompt Engineering",
    issuer: "NVIDIA",
    category: "Generative AI",
    icon: "fas fa-microchip",
    desc: "Advanced prompt design, chain-of-thought, few-shot prompting, and structured output formatting for LLMs."
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud Computing",
    icon: "fab fa-microsoft",
    desc: "Core Azure cloud architecture, cloud security, identity, management tools, and service deployment."
  },
  {
    title: "AWS Compute Services",
    issuer: "Amazon Web Services",
    category: "Cloud Computing",
    icon: "fab fa-aws",
    desc: "Deploying and scaling serverless, EC2, and containerized backend microservices on AWS cloud."
  },
  {
    title: "Frontend Web Development Certification",
    issuer: "Micro1",
    category: "Web Engineering",
    icon: "fas fa-laptop-code",
    desc: "Certified through AI-conducted live coding and architecture evaluation."
  }
];

export default function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="title">
        <h2 className="section-title">Certifications & Industry Credentials</h2>
        <p className="section-subtitle">
          Continuous learning and verified certifications in Agentic AI, Cloud Engineering, and Modern Web Stack.
        </p>
      </div>

      <div className="certifications-grid">
        {CERTS.map((cert, i) => (
          <div className="cert-card glass-panel" key={i}>
            <div className="cert-badge-header">
              <div className="cert-icon-wrapper">
                <i className={cert.icon}></i>
              </div>
              <span className="cert-category">{cert.category}</span>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer"><i className="fas fa-certificate"></i> {cert.issuer}</p>
            <p className="cert-desc">{cert.desc}</p>
            <div className="cert-verified">
              <i className="fas fa-check-double"></i> Verified Credential
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
