import React from 'react'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="title">
        <h2 className="section-title">My Skills</h2>
      </div>

      <div className="content">
        <div className="column col-left">
          <h1 className="content-title">Skills & Experience</h1>
          <p>
            I am a <b>Full Stack Developer</b> specializing in the <b>MERN stack and Next.js</b>.
            I have experience building scalable and responsive web applications with
            modern frontend technologies and robust backend services.
            <br />
            My development experience includes creating production-ready web
            applications, integrating REST APIs, implementing authentication
            systems, and designing responsive user interfaces.
            <br />
            I have worked with technologies like <b>React.js, Next.js, Node.js,
              Express.js, MongoDB, and Tailwind CSS</b> to build full-stack
            applications. I also have programming knowledge in
            <b> JavaScript, Python, and C</b>.
            <br />
            Additionally, I am familiar with modern development tools such as
            <b> Git, GitHub, Postman, Vercel, and Netlify</b> for version control,
            API testing, and deployment. I continuously focus on improving my
            skills in <b>system design, performance optimization, and AI
              integration in web applications</b>.
          </p>
        </div>

        <div className="column col-right">
          <div className="bar">
            <div className="info">
              <span>JavaScript</span>
              <span>85%</span>
            </div>
            <div className="line javascript"></div>
          </div>

          <div className="bar">
            <div className="info">
              <span>React / Next.js</span>
              <span>85%</span>
            </div>
            <div className="line react"></div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Node.js / Express</span>
              <span>80%</span>
            </div>
            <div className="line node"></div>
          </div>

          <div className="bar">
            <div className="info">
              <span>MongoDB</span>
              <span>80%</span>
            </div>
            <div className="line mongodb"></div>
          </div>

          <div className="bar">
            <div className="info">
              <span>HTML & CSS</span>
              <span>90%</span>
            </div>
            <div className="line htmlcss"></div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Python</span>
              <span>80%</span>
            </div>
            <div className="line python"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

