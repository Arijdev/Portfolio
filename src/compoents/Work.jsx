import React from 'react'
import { Link } from 'react-router-dom';
import screen1 from "../assets/images/Screenshot 2023-11-03 102927.jpg"
import screen2 from "../assets/images/Screenshot 2023-11-03 105538.jpg"
import screen3 from "../assets/images/Screenshot 2023-11-03 115113.jpg"
import voice from "../assets/images/voice.png"
import note from "../assets/images/note.png"
import sketch from "../assets/images/sketchbord.png"
import screen4 from "../assets/images/Screenshot 2023-11-03 115733.jpg"
import airoast from "../assets/images/airoast.jpg"
import mystery from "../assets/images/mystery.png"

export default function Work() {
  return (
    <section className="services" id="work">
      <div className="title ">
        <h2 className="section-title">My Works</h2>
        <p>
          I am a <b>Full Stack Developer</b> with experience in building modern and
          responsive web applications using technologies like
          <b> HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB</b>.
          I enjoy developing scalable applications, integrating APIs, and creating
          clean user interfaces.

          Below are some of the projects I have built, showcasing my work in     <b>full-stack development, AI integration, and modern web technologies</b>.
        </p>
      </div>
      <div className="content">
        <div className="card ">
          <div className="service-icon">
            <img src={screen1} className="img1" />
          </div>
          <div className="info1">
            <h3><Link to="/login">login interface</Link></h3>
            <p>
              Modern glassmorphism login interface with responsive design, social authentication icons, remember-me option, and clean UI/UX focused on user friendly web authentication experience.
            </p>
          </div>
        </div>
<div className="card">
  <div className="service-icon">
    <img src={airoast} className="img1" />
  </div>
  <div className="info1">
    <h3><Link to="https://ai-roast-alpha.vercel.app/">AI Roast You</Link></h3>
    <p>
      AI-powered roasting web app where users upload photos or text prompts to receive humorous AI roasts. Includes authentication, dashboard, roast history, multiple languages, and styles.
    </p>
  </div>
</div>

<div className="card">
  <div className="service-icon">
    <img src={mystery} className="img1" />
  </div>
  <div className="info1">
    <h3><Link to="https://mystery-boxes-ashen.vercel.app/">Mystery Box E-commerce</Link></h3>
    <p>
      Full-stack mystery box e-commerce platform with authentication, dynamic pricing logic, REST API integration, and responsive interface built using Next.js, Node.js, and MongoDB.
    </p>
  </div>
</div>
        <div className="card ">
          <div className="service-icon">
            <img src={screen2} className="img1" />
          </div>
          <div className="info1">
            <h3><Link to="/tictactoe">tic-tac-toe</Link> </h3>
            <p>
              Interactive Tic Tac Toe web game built with JavaScript featuring real-time win detection, reset functionality, simple UI design, and responsive gameplay for two players.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="service-icon">
            <img src={screen3} className="img1" />
          </div>
          <div className="info1">
            <h3>language translator</h3>
            <p>
              Web based language translator that converts text between multiple languages using API integration, featuring speech support, copy functionality, and simple responsive interface.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="service-icon">
            <img src={voice} className="img1" />
          </div>
          <div className="info1">
            <h3><Link to="/voicetyping">Voice typing</Link> </h3>
            <p>
              Voice typing web application that converts speech into text in real time using browser speech recognition, making writing faster and easier without typing.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="service-icon">
            <img src={note} className="img1" />
          </div>
          <div className="info1">
            <h3><Link to="/Digitalnote">Digital note</Link> </h3>
            <p>
              Simple digital notes and todo list application to create, manage, and delete daily tasks with clean interface, helping users stay organized and productive.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="service-icon">
            <img src={sketch} className="img1" />
          </div>
          <div className="info1">
            <h3><Link to="/DigitalSkatch">Sketch Bord</Link> </h3>
            <p>
              Interactive digital sketch board that allows users to draw freely on canvas with mouse controls, simple tools, and responsive design for quick creative drawing.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="service-icon">
            <img src={screen4} className="img1" />
          </div>
          <div className="info1">
            <h3>calender</h3>
            <p>
              Dynamic calendar application displaying current date and real time clock with month navigation, modern glass UI design, and responsive layout for better user interaction.
            </p>
          </div>
        </div>
</div>
    </section>
  )
}
