import React from 'react'
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
<section className="c-space pt-7 pb-3 border-t border-black-300 flex items-center justify-between gap-5 flex-wrap">
    <div className="flex gap-2 text-white-500 max-sm:mx-auto">
        <div className="p">Developed with ❤️</div>
        <div className="p">|</div>
        <div className="p">Mara Srikar</div>
    </div>
    <div className="flex gap-3 max-sm:mx-auto">
        <div className="social-icon">
            <FaGithub color='white' size={22} onClick={()=>{
                window.open('https://github.com/srikar122', '_blank')
            }}/>
        </div>
        <div className="social-icon">
            <FaLinkedin color='white' size={21} onClick={()=>{
                window.open('https://www.linkedin.com/in/srikar-mara-1263901b5/')
            }}/>
        </div>
        <div className="social-icon">
            <FaInstagram color='white' size={23} onClick={()=>{
                window.open('https://www.instagram.com/marasrikar/profilecard/?igsh=MWc0dTc4ampxNXZ6eQ==')
            }}/>
        </div>
    </div>
</section>  )
}

export default Footer