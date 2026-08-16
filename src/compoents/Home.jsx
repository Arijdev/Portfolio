import React from 'react'
import resume from '../assets/images/ArijResume.pdf'

export default function Home() {

    return (
            <section className="main" id="home" >
                <div className="content">
                    <h2>Hello, I'm<br /><span>Arij Chowdhury</span></h2>
                    <div className="animated-text">
                        <h3>Web Designer</h3>
                        <h3>Web Developer</h3>
                        <h3>Graphic Designer</h3>
                    </div>
                    <a href="#about" className="btn">About me</a>
                    <a href={resume} className="btn" download="ArijResume.pdf">Resume</a>
                    <div className="media-icons">
                        <a href="https://www.facebook.com/arij.chowdhury"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/stylish_arij/"><i className="fab fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/in/arij-chowdhury-96ab3b261"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </section>

    )
}
