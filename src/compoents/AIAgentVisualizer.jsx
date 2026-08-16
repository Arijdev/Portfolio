import React, { useState } from 'react';

const AGENT_STEPS = [
  {
    step: 1,
    id: "guardrail",
    title: "1. Prompt Guardrails & Task Input",
    tech: "LangChain / Input Validation",
    icon: "fas fa-shield-alt",
    desc: "User submits research query via Next.js frontend. Prompt guardrails validate safety, structure, and token bounds."
  },
  {
    step: 2,
    id: "router",
    title: "2. LangGraph Stateful Router",
    tech: "LangGraph StateGraph",
    icon: "fas fa-project-diagram",
    desc: "LangGraph initializes a persistent state object. The graph node determines whether to query web search or internal vector indices."
  },
  {
    step: 3,
    id: "retrieval",
    title: "3. Vector DB & Web Retrieval",
    tech: "Vector Search / Web Scraping",
    icon: "fas fa-search-location",
    desc: "Retrieval node fetches web documentation and queries vector embeddings, updating the state thread with raw data chunks."
  },
  {
    step: 4,
    id: "synthesis",
    title: "4. LLM Synthesis & Report Generation",
    tech: "LangChain / LLM Orchestration",
    icon: "fas fa-brain",
    desc: "Synthesizer node parses raw context, checks for hallucinations, and formats structured Markdown research reports."
  },
  {
    step: 5,
    id: "storage",
    title: "5. MongoDB Memory & Next.js UI",
    tech: "MongoDB / Next.js State",
    icon: "fas fa-database",
    desc: "Report and agent thread memory are saved into MongoDB. The Next.js dashboard streams the finished report to the user."
  }
];

export default function AIAgentVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStepInfo = AGENT_STEPS[activeStep];

  return (
    <section className="ai-agent-visualizer" id="ai-architecture">
      <div className="title">
        <h2 className="section-title">Autonomous Agent Architecture Visualizer</h2>
        <p className="section-subtitle">
          Interactive workflow simulation showing how Arij builds stateful multi-agent systems using LangGraph & MongoDB.
        </p>
      </div>

      <div className="agent-diagram-wrapper glass-panel">
        <div className="diagram-nav-nodes">
          {AGENT_STEPS.map((item, idx) => (
            <div
              key={item.id}
              className={`diagram-node ${activeStep === idx ? 'active' : ''} ${activeStep > idx ? 'completed' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="node-icon-bubble">
                <i className={item.icon}></i>
              </div>
              <span className="node-label">Step {item.step}</span>
              {idx < AGENT_STEPS.length - 1 && <div className="node-connector-line"></div>}
            </div>
          ))}
        </div>

        <div className="step-detail-card">
          <div className="step-header">
            <div className="step-title-wrap">
              <span className="step-number-tag">Node {currentStepInfo.step} / 5</span>
              <h3>{currentStepInfo.title}</h3>
            </div>
            <span className="tech-badge-glow">{currentStepInfo.tech}</span>
          </div>

          <p className="step-description">{currentStepInfo.desc}</p>

          <div className="step-controls">
            <button
              className="btn btn-outline"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            >
              <i className="fas fa-chevron-left"></i> Previous Node
            </button>

            <button
              className="btn btn-primary"
              disabled={activeStep === AGENT_STEPS.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(AGENT_STEPS.length - 1, prev + 1))}
            >
              Next Node <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
