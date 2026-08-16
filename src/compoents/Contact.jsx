import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [copied, setCopied] = useState(false);

  const sendmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    emailjs.sendForm('service_knkhhqx', 'template_2labj55', form.current, 'lw2Mcf77elYxKWX23')
      .then(() => {
        setIsSending(false);
        setStatusMessage({ type: 'success', text: '🎉 Thank you! Your message has been sent directly to Arij.' });
        form.current.reset();
      }, (error) => {
        setIsSending(false);
        setStatusMessage({ type: 'error', text: `Failed to send message: ${error.text || 'Please email directly to arij.chowdhuryr@gmail.com'}` });
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('arij.chowdhuryr@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2 className="section-title">Get In Touch / Hire Arij</h2>
        <p className="section-subtitle">
          Seeking Full-Stack Development and Agentic AI roles. Open to Remote, On-site, Relocation & Global opportunities.
        </p>
      </div>

      <div className="content">
        <div className="contact-cards-grid">
          <div className="card contact-card glass-panel">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info2">
              <h3>Location & Work Status</h3>
              <span>Bengaluru, Karnataka, India</span>
              <span className="sub-info">Open to Relocation & Remote Roles Globally</span>
            </div>
          </div>

          <div className="card contact-card glass-panel">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info2">
              <h3>Phone / WhatsApp</h3>
              <span>+91 9901412827</span>
              <a href="tel:+919901412827" className="quick-call-link">
                <i className="fas fa-headset"></i> Call Directly
              </a>
            </div>
          </div>

          <div className="card contact-card glass-panel">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info2">
              <h3>Direct Email</h3>
              <span>arij.chowdhuryr@gmail.com</span>
              <button onClick={copyEmail} className="copy-btn">
                <i className={copied ? "fas fa-check" : "fas fa-copy"}></i> {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" ref={form} onSubmit={sendmail}>
            <h3>
              <i className="fas fa-paper-plane"></i> Send Direct Message / Interview Request
            </h3>
            
            {statusMessage && (
              <div className={`status-alert ${statusMessage.type}`}>
                {statusMessage.text}
              </div>
            )}

            <div className="form-grid">
              <div className="input-box">
                <label>Your Name / Company</label>
                <input type="text" name="name" placeholder="e.g. John Doe (Tech Lead / Recruiter)" required />
              </div>

              <div className="input-box">
                <label>Your Email Address</label>
                <input type="email" name="email" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="input-box full-width">
              <label>Message / Job Opportunity Details</label>
              <textarea name="message" id="write" cols="30" placeholder="Hi Arij, we would love to discuss a Full Stack / Agentic AI position with you..." rows="6" required></textarea>
            </div>

            <div className="form-action">
              <button type="submit" className="send-btn" disabled={isSending}>
                {isSending ? (
                  <span><i className="fas fa-spinner fa-spin"></i> Sending...</span>
                ) : (
                  <span><i className="fas fa-paper-plane"></i> Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
