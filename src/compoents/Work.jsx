import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import screen1 from "../assets/images/Screenshot 2023-11-03 102927.jpg";
import screen2 from "../assets/images/Screenshot 2023-11-03 105538.jpg";
import screen3 from "../assets/images/Screenshot 2023-11-03 115113.jpg";
import voice from "../assets/images/voice.png";
import note from "../assets/images/note.png";
import sketch from "../assets/images/sketchbord.png";
import screen4 from "../assets/images/Screenshot 2023-11-03 115733.jpg";
import airoast from "../assets/images/airoast.jpg";
import mystery from "../assets/images/mystery.png";
import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";

const PROJECTS_DATA = [
  {
    title: "Autonomous Research & Report Agent",
    category: "Agentic AI Systems",
    image: work1,
    badge: "Agentic AI / LangGraph",
    github: "https://github.com/Arijdev",
    description: "Built a multi-step autonomous research agent using LangGraph that researches topics, retrieves & synthesizes web data, and generates structured reports with persistent agent state and memory stored in MongoDB, integrated with a Next.js frontend.",
    tech: ["LangGraph", "LangChain", "MongoDB", "Next.js", "Python", "Web Scraping"],
    isFeatured: true
  },
  {
    title: "Multi-Agent Ops Assistant",
    category: "Agentic AI Systems",
    image: work2,
    badge: "Agentic AI Dashboard",
    github: "https://github.com/Arijdev",
    description: "Designed a multi-agent system using LangChain and LangGraph where collaborating agents monitor incoming data, detect anomalies, and auto-draft summary alerts, with a Node.js backend using vector-based retrieval for context-aware responses and a Next.js dashboard.",
    tech: ["LangChain", "LangGraph", "Vector DB", "Node.js", "Next.js", "Express.js"],
    isFeatured: true
  },
  {
    title: "Mystery Box E-commerce Platform",
    category: "Full Stack Web Apps",
    image: mystery,
    badge: "Full Stack / MERN",
    github: "https://github.com/Arijdev",
    link: "https://mystery-boxes-ashen.vercel.app/",
    description: "Developed a scalable e-commerce platform using Next.js, Node.js, MongoDB, and REST APIs, implementing secure authentication, responsive UI, product and order management, and optimized frontend-backend integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "Tailwind CSS"],
    isFeatured: true
  },
  {
    title: "Zero-Day Guard (Malware Detection XAI)",
    category: "Agentic AI Systems",
    image: work3,
    badge: "Explainable AI (XAI)",
    github: "https://github.com/Arijdev",
    description: "Used Pandas, NumPy, Scikit-learn, Matplotlib, and machine learning algorithms with explainability techniques (SHAP/LIME) to develop and integrate predictive models into a Windows security application called Zero-Day Guard.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Explainable AI", "Security"],
    isFeatured: true
  },
  {
    title: "AI Roast You",
    category: "Full Stack Web Apps",
    image: airoast,
    badge: "AI Web Application",
    link: "https://ai-roast-alpha.vercel.app/",
    description: "AI-powered roasting web app where users upload photos or text prompts to receive humorous AI roasts. Includes authentication, dashboard, roast history, multiple languages, and custom styling.",
    tech: ["React.js", "AI API", "Node.js", "Tailwind CSS", "Vercel"],
    isFeatured: false
  },
  {
    title: "Voice Typing Application",
    category: "AI Tools & Utilities",
    image: voice,
    badge: "Web Speech Tool",
    route: "/voicetyping",
    description: "Voice typing web application that converts speech into text in real time using browser speech recognition, making writing faster and easier without typing.",
    tech: ["JavaScript", "Web Speech API", "React.js", "CSS3"],
    isFeatured: false
  },
  {
    title: "Digital Note & Task Board",
    category: "AI Tools & Utilities",
    image: note,
    badge: "Productivity",
    route: "/Digitalnote",
    description: "Digital notes and todo list application to create, manage, organize, and delete daily tasks with a clean glassmorphism interface.",
    tech: ["React.js", "Local Storage", "CSS3"],
    isFeatured: false
  },
  {
    title: "Interactive Canvas Sketch Board",
    category: "AI Tools & Utilities",
    image: sketch,
    badge: "Canvas Tool",
    route: "/DigitalSkatch",
    description: "Interactive digital sketch board allowing users to draw freely on HTML5 canvas with mouse controls, dynamic brush colors, and responsive layout.",
    tech: ["HTML5 Canvas", "React.js", "JavaScript"],
    isFeatured: false
  },
  {
    title: "Glassmorphic Auth System",
    category: "Full Stack Web Apps",
    image: screen1,
    badge: "UI/UX & Auth",
    route: "/login",
    description: "Modern glassmorphism authentication interface with responsive design, social logins, password recovery flows, and client validation.",
    tech: ["React.js", "CSS Glassmorphism", "Router"],
    isFeatured: false
  },
  {
    title: "Interactive Tic-Tac-Toe Game",
    category: "AI Tools & Utilities",
    image: screen2,
    badge: "Web Game",
    route: "/tictactoe",
    description: "Interactive game featuring real-time win detection algorithms, score tracking, turn indicators, and responsive gameplay.",
    tech: ["React.js", "JavaScript Logic", "CSS3"],
    isFeatured: false
  },
  {
    title: "Multi-Language Translator",
    category: "AI Tools & Utilities",
    image: screen3,
    badge: "Translation Tool",
    description: "Web-based language translator converting text across multiple languages using API integration, featuring text-to-speech support.",
    tech: ["JavaScript", "Translation API", "React.js"],
    isFeatured: false
  },
  {
    title: "Dynamic Calendar & Live Clock",
    category: "AI Tools & Utilities",
    image: screen4,
    badge: "Utility App",
    description: "Dynamic calendar displaying current date, month navigation, live clock updates, and sleek glass UI styling.",
    tech: ["JavaScript", "React.js", "CSS3"],
    isFeatured: false
  }
];

const CATEGORIES = ["All Projects", "Agentic AI Systems", "Full Stack Web Apps", "AI Tools & Utilities"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="services" id="work">
      <div className="title">
        <h2 className="section-title">Featured Projects & Case Studies</h2>
        <p className="section-subtitle">
          Showcasing production-grade web applications, autonomous Agentic AI systems, and machine learning solutions.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="project-filter-tabs">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="content work-grid">
        {filteredProjects.map((project, idx) => (
          <div className="card project-card glass-panel" key={idx}>
            <div className="service-icon project-img-wrapper">
              <img src={project.image} alt={project.title} className="img1" />
              <span className="project-badge">{project.badge}</span>
            </div>

            <div className="info1 project-info">
              <h3>
                {project.route ? (
                  <Link to={project.route}>{project.title}</Link>
                ) : project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title} <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech-stack">
                {project.tech.map((t, tIdx) => (
                  <span className="tech-tag" key={tIdx}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-btn live-btn">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
                {project.route && (
                  <Link to={project.route} className="proj-btn route-btn">
                    <i className="fas fa-play-circle"></i> Launch App
                  </Link>
                )}
                <a href={project.github || "https://github.com/Arijdev"} target="_blank" rel="noopener noreferrer" className="proj-btn github-btn">
                  <i className="fab fa-github"></i> Code Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
