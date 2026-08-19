import React from 'react';

export default function ExperienceEducation() {
  return (
    <section className="experience-education" id="experience">
      <div className="title">
        <h2 className="section-title">Experience & Academic Credentials</h2>
        <p className="section-subtitle">
          Demonstrated performance in production web development, competitive problem solving, and rigorous academic training.
        </p>
      </div>

      <div className="experience-grid">
        {/* Work Experience */}
        <div className="timeline-card glass-panel">
          <div className="card-header-icon">
            <i className="fas fa-briefcase"></i>
            <h3>Work Experience</h3>
          </div>

          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-content">
                <span className="timeline-date">Oct 2025 – Jan 2026 | Kolkata, India</span>
                <h4>Frontend Web Development Intern</h4>
                <h5>Codtech IT Solutions Pvt. Ltd.</h5>
                <ul className="experience-bullets">
                  <li>
                    <i className="fas fa-check-circle"></i> Engineered 2 production-grade multi-page web applications using<b>Next.js</b>with modular component architecture and REST API integration.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Optimized web performance using lazy loading, image optimization, and efficient state management, reducing page load time by ~<b>30%</b>.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Implemented responsive cross-device UI design systems and state persistence patterns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="timeline-card glass-panel">
          <div className="card-header-icon">
            <i className="fas fa-graduation-cap"></i>
            <h3>Education</h3>
          </div>

          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-badge highlight"></div>
              <div className="timeline-content">
                <span className="timeline-date">2022 – 2026</span>
                <span className="score-tag">CGPA: 8.45 / 10</span>
                <h4>B.Tech in Information Technology</h4>
                <p className="institute">Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal</p>
                <p className="detail-note">Focused on Data Structures & Algorithms, Software Engineering, Database Management, and Agentic AI Systems.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-content">
                <span className="timeline-date">2022</span>
                <span className="score-tag">76%</span>
                <h4>Higher Secondary (XII - Science)</h4>
                <p className="institute">Jangipur High School, WBCHSE</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-content">
                <span className="timeline-date">2020</span>
                <span className="score-tag">68%</span>
                <h4>Secondary (X)</h4>
                <p className="institute">Rabindra Smrity Vidyatirtha, WBBSE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Banner */}
      <div className="achievements-section glass-panel">
        <h3 className="achievements-title">
          <i className="fas fa-trophy"></i> Key Coding Achievements & Recognitions
        </h3>
        <div className="achievements-grid">
          <div className="achievement-box">
            <div className="ach-icon"><i className="fas fa-code"></i></div>
            <div className="ach-info">
              <h4>TCS CodeVita Season 13</h4>
              <p className="ach-highlight">Global Rank 2832</p>
              <p className="ach-desc">Ranked among top global competitors in algorithmic problem solving.</p>
            </div>
          </div>

          <div className="achievement-box">
            <div className="ach-icon"><i className="fas fa-user-check"></i></div>
            <div className="ach-info">
              <h4>Micro1 Certified</h4>
              <p className="ach-highlight">AI Interview Certified</p>
              <p className="ach-desc">Vetted and certified in Frontend Web Development via AI technical evaluations.</p>
            </div>
          </div>

          <div className="achievement-box">
            <div className="ach-icon"><i className="fas fa-award"></i></div>
            <div className="ach-info">
              <h4>HackVega Hackathon 2025</h4>
              <p className="ach-highlight">Certificate of Merit</p>
              <p className="ach-desc">Recognized for innovative software solution build during national hackathon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
