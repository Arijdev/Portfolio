import React , {useRef} from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {

  const form =useRef();
  const sendmail = (e)=>{
  e.preventDefault();
  
  emailjs.sendForm('service_knkhhqx', 'template_2labj55',form.current, 'lw2Mcf77elYxKWX23').then(()=>{
  alert('successfully submitted');
  form.current.reset();
  },(error)=>{
  alert('Faild..',error.text);
  },);

  
};
  return (
    <section className="contact" id="contact">
    <div className="title ">
      <h2 className="section-title">Contact Me</h2>
    </div>
    <div className="content">
      <div className="row">
        <div className="card ">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="info2">
            <h3>Address</h3>
            <span>Chhilimpur, Itahar, Uttar Dinajpur, West Bengal, 733128, INDIA</span>
          </div>
        </div>
        <div className="card ">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="info2">
            <h3>Phone</h3>
            <span>+91 9901412827</span>
          </div>
        </div>
        <div className="card ">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="info2">
            <h3>Email Address</h3>
            <span>arij.chowdhuryr@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="row">
        <form className="contact-form " ref={form} onSubmit={sendmail}>
          <h3>Send Message</h3>
          <div className="input-box">
            <input type="text" name="name"  placeholder="Name" required />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input">
             <textarea name="message" id="write" cols="30" placeholder="write here.." rows="8"></textarea>
          </div>
          <div className="input-box">
            <input type="submit" className="send-btn" name="" value="Send"/>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}
