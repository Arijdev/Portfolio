import React, { useState, useRef, useEffect } from 'react';

const RESUME_DATA = {
  name: "Arij Chowdhury",
  title: "Full Stack Developer | Agentic AI Developer",
  location: "Bengaluru, Karnataka, India (Open to Remote & Relocation)",
  email: "arij.chowdhuryr@gmail.com",
  phone: "+91 9901412827",
  github: "https://github.com/Arijdev",
  linkedin: "https://in.linkedin.com/in/arij-chowdhury-96ab3b261",
  education: "B.Tech in Information Technology from Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal | CGPA: 8.45 / 10 (2022-2026)",
  experience: "Frontend Web Development Intern at Codtech IT Solutions Pvt. Ltd. (Oct 2025 – Jan 2026), where he engineered 2 production-grade multi-page web applications using Next.js and optimized performance by ~30%.",
  codevita: "Secured Global Rank 2832 in TCS CodeVita Season 13.",
  certifications: [
    "AI Interview Certified in Frontend Web Development from Micro1",
    "Oracle Agentic AI Foundations",
    "Build Reliable Agentic AI Applications",
    "NVIDIA Prompt Engineering",
    "Microsoft Azure Fundamentals",
    "AWS Compute Services"
  ],
  topProjects: [
    {
      name: "Autonomous Research & Report Agent",
      tech: "LangGraph, MongoDB, Next.js, Web Data Retrieval",
      desc: "Multi-step autonomous agent that conducts web research, synthesizes data, and generates structured reports with persistent state in MongoDB."
    },
    {
      name: "Multi-Agent Ops Assistant",
      tech: "LangChain, LangGraph, Vector DB, Node.js, Next.js",
      desc: "Collaborating AI agents monitoring system data, detecting anomalies, and drafting summary alerts with vector-based retrieval."
    },
    {
      name: "Mystery Box E-commerce Platform",
      tech: "Next.js, Node.js, MongoDB, REST APIs",
      desc: "Full-stack mystery box platform with dynamic pricing logic, secure auth, and responsive UI."
    },
    {
      name: "Malware Detection - Zero-Day Guard",
      tech: "Python, Scikit-learn, Explainable AI (XAI), Pandas",
      desc: "Machine learning malware classification tool with explainability techniques built for Windows security."
    }
  ]
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hi! I am **Arij's AI Recruiter Representative**. I know everything about Arij's technical background, Agentic AI skills, projects, and achievements. How can I help you hire Arij today?",
      quickChips: [
        "Why should we hire Arij?",
        "Tell me about his Agentic AI skills",
        "What are his top projects?",
        "What is his experience & CGPA?"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleQuickQuestion = (question) => {
    processUserMessage(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const msg = inputMessage;
    setInputMessage("");
    processUserMessage(msg);
  };

  const processUserMessage = (userText) => {
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = getBotAnswer(userText);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse.text,
          quickChips: botResponse.quickChips || null,
          actionLink: botResponse.actionLink || null
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const getBotAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes("why") && (q.includes("hire") || q.includes("select"))) {
      return {
        text: `🌟 **Why Hire Arij Chowdhury?**\n\n1. **Proven Agentic AI & Full Stack Expertise**: Hands-on experience with LangGraph, LangChain, RAG, Next.js, and Node.js.\n2. **High Problem Solver**: Global Rank **2832 in TCS CodeVita Season 13**.\n3. **Strong Academic Track Record**: B.Tech in IT with **8.45/10 CGPA** at MAKAUT.\n4. **Production Experience**: Engineered multi-page production Next.js apps during his internship at Codtech IT Solutions.\n5. **AI Interview Certified**: Certified by Micro1 in Frontend Web Development + Oracle, NVIDIA & AWS certified.`,
        quickChips: ["Tell me about his Agentic AI skills", "What are his top projects?", "Contact Arij for Interview"],
        actionLink: { label: "📩 Contact Arij Now", href: "#contact" }
      };
    }

    if (q.includes("agentic") || q.includes("ai") || q.includes("langgraph") || q.includes("rag")) {
      return {
        text: `🤖 **Agentic AI & ML Expertise**:\n\nArij specializes in building autonomous AI agents and workflows using:\n- **LangGraph & LangChain** for agent orchestration, stateful multi-agent systems, and graph workflows.\n- **RAG & Vector Databases** for context-aware document retrieval.\n- **n8n & Guardrails** for scalable AI workflow automation.\n- Built an **Autonomous Research & Report Agent** and a **Multi-Agent Ops Assistant**.`,
        quickChips: ["Show top projects", "What certifications does he have?", "Why hire Arij?"],
        actionLink: { label: "💻 View AI Projects", href: "#work" }
      };
    }

    if (q.includes("project") || q.includes("work") || q.includes("build") || q.includes("mystery")) {
      return {
        text: `🚀 **Top Featured Projects by Arij**:\n\n1. 🧠 **Autonomous Research & Report Agent** (LangGraph, MongoDB, Next.js) - Researches & generates structured reports autonomously.\n2. 🛡️ **Multi-Agent Ops Assistant** (LangChain, LangGraph, Node.js) - Collaborating agents for anomaly detection & auto-alerting.\n3. 📦 **Mystery Box E-commerce** (Next.js, Express, MongoDB) - Scalable e-commerce platform with dynamic pricing logic.\n4. 🔍 **Zero-Day Guard Malware Detection** (Python, Explainable AI, Scikit-learn).`,
        quickChips: ["Tell me about his Agentic AI skills", "How to contact Arij?"],
        actionLink: { label: "🔍 View All Works", href: "#work" }
      };
    }

    if (q.includes("cgpa") || q.includes("education") || q.includes("college") || q.includes("experience") || q.includes("intern")) {
      return {
        text: `🎓 **Education & Work Experience**:\n\n- **Internship**: Frontend Web Development Intern at **Codtech IT Solutions** (Oct 2025 - Jan 2026). Engineered 2 production Next.js web applications, cutting load times by ~30%.\n- **Education**: B.Tech in Information Technology (2022-2026) from MAKAUT | **CGPA: 8.45/10**.\n- **Rank**: Global Rank **2832 in TCS CodeVita Season 13**.`,
        quickChips: ["What certifications does he have?", "Why hire Arij?"],
        actionLink: { label: "📜 View Experience Timeline", href: "#experience" }
      };
    }

    if (q.includes("certif") || q.includes("micro1") || q.includes("oracle") || q.includes("aws") || q.includes("azure")) {
      return {
        text: `🏆 **Certifications & Achievements**:\n\n- **Micro1 Certified**: AI Interview Certified in Frontend Web Development.\n- **TCS CodeVita**: Global Rank 2832 (Season 13).\n- **HackVega 2025**: Certificate of Merit.\n- **Cloud & AI Certs**: Oracle Agentic AI Foundations, NVIDIA Prompt Engineering, AWS Compute Services, Microsoft Azure Fundamentals.`,
        quickChips: ["Why hire Arij?", "Contact Arij for Interview"],
        actionLink: { label: "🥇 View Certifications", href: "#certifications" }
      };
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("interview") || q.includes("reach")) {
      return {
        text: `📬 **Contact Info & Availability**:\n\n- 📧 **Email**: arij.chowdhuryr@gmail.com\n- 📞 **Phone**: +91 9901412827\n- 📍 **Location**: Bengaluru, KA, India (Open to Remote, Relocation & International Roles)\n- 🔗 **LinkedIn**: linkedin.com/in/arij-chowdhury-96ab3b261`,
        actionLink: { label: "✉️ Send Direct Message", href: "#contact" }
      };
    }

    return {
      text: `Arij is a high-performing **Full Stack & Agentic AI Developer** skilled in Next.js, React, Node.js, LangGraph, RAG, Python, and MongoDB. He scored an 8.45 CGPA in B.Tech IT, ranked 2832 globally in TCS CodeVita, and is open for Full-Time / Remote / On-site roles!`,
      quickChips: [
        "Why should we hire Arij?",
        "Tell me about his Agentic AI skills",
        "What are his top projects?",
        "How to contact Arij?"
      ]
    };
  };

  const parseMarkdownText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="ai-chatbot-wrapper">
      {/* Floating Toggle Button */}
      <button 
        className={`ai-chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Recruiter Chatbot"
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <div className="chatbot-icon-inner">
            <i className="fas fa-robot"></i>
            <span className="pulse-badge">AI Assistant</span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chatbot-container">
          <div className="ai-chatbot-header">
            <div className="ai-header-info">
              <div className="ai-avatar">
                <i className="fas fa-brain"></i>
              </div>
              <div>
                <h4>Arij's AI Recruiter Bot</h4>
                <span className="online-indicator">🟢 Online | Instant Answers</span>
              </div>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-minus"></i>
            </button>
          </div>

          <div className="ai-chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="msg-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                )}
                <div className="msg-bubble">
                  <div className="msg-text">
                    {msg.text.split('\n').map((line, lIdx) => (
                      <p key={lIdx}>
                        {parseMarkdownText(line)}
                      </p>
                    ))}
                  </div>

                  {msg.actionLink && (
                    <a href={msg.actionLink.href} onClick={() => setIsOpen(false)} className="chat-action-btn">
                      {msg.actionLink.label}
                    </a>
                  )}

                  {msg.quickChips && (
                    <div className="quick-chips-container">
                      {msg.quickChips.map((chip, cIdx) => (
                        <button key={cIdx} className="quick-chip" onClick={() => handleQuickQuestion(chip)}>
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message bot">
                <div className="msg-avatar">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="msg-bubble typing-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form className="ai-chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask about Arij's skills, projects, CGPA..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
