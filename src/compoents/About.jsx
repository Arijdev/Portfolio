import React from 'react'
import img1 from '../assets/images/img1.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="title ">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="content">
        
        <div className="column col-left ">
          <div className="img-card">
            <img src={img1} alt=""/>
          </div>
        </div>
        <div className="column col-right ">
          <h2 className="content-title">Hey There! I'm Arij Chowdhury</h2>
          <p className="paragraph-text">Hello, I am Arij Chowdhury. I am pursuing my Under Graduate degree from <b>Maulana Abul kalam Azad university of technology</b>, West Bengal in <b>BTech</b> stream specialization in <b>Information technology</b>. I compleate my Secondary exam from Rabindra smrity vidyapith(HS), Gangarampur and Higher Secondary exam from Jangipur high school(HS),Jangipur.<br/><br/>I belong to a Middle Class family, My father is a farmar and my mother is a housewife. I am a prominent coder in <b>C and Python</b> computer language. I have completed many projects using c++ and I have also contributed in open source also. I also have expertise in web development. I am also learned <b>HTML,CSS,Java Script,React js, Next js, MongoDB and Php</b> also.I have completed many<b> full stack development</b> projects. I have a good typing speed of <b>30 WPM</b>. I can be a very good employee regarding my skills and experience...</p>
        </div>
      </div>
    </section>
    
  )
}
