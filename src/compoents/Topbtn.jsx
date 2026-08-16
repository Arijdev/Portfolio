import React, { useEffect, useState } from 'react'

export default function Topbtn() {
    // const [isSticky, setIsSticky] = useState(false);
    const [isScrollBtnActive, setIsScrollBtnActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const y = window.scrollY
            setIsScrollBtnActive(y > 500)
        })

        return window.removeEventListener("scroll", ()=>{})
      }, []);
      
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (

    <div>
       <div className={`scrollToTop-btn ${isScrollBtnActive ? "active" : ""}`} onClick={scrollToTop} >
        <i className="fas fa-angle-up" />
      </div>
    </div>
  )
}
