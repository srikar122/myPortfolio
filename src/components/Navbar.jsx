// import {   Link, } from 'react-router-dom'
import { menu, close } from '../assets'
import { nav } from 'framer-motion/client'
import { useState, useEffect } from 'react'
// import { RiMenu4Line } from "react-icons/ri";
import { HashLink as Link } from 'react-router-hash-link'



const Navbar = () => {
  
  const [active, setActive] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust height threshold here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`sm:px-16 px-6 w-full text-white flex items-center py-5 fixed top-0 z-20 ${isScrolled ? "bg-black-100" : "bg-transparent"} transition-all duration-300`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        ><p className='text-[18px] font-bold'>Srikar | Mara</p>
        </Link>
        <ul className='list-none sm:flex gap-10 hidden'>
          <li>
            <Link to="/#about" className=
              {`
                  ${active === "about" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white`}
              onClick={() => {
                setActive("about")
              }}

            >About</Link>
          </li>
          <li>
            <Link to="/#tech" className=
              {`
                  ${active === "tech" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white`}
              onClick={() => {
                setActive("tech")
              }}

            >Skills</Link>
          </li>
          <li>
            <Link to="/#works" className=
              {`
                  ${active === "work" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white`}
              onClick={() => {
                setActive("work")
              }}

            >Projects</Link>
          </li>
          <li>
            <Link to="/#contact" className=
              {`
                  ${active === "contact" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white`}
              onClick={() => {
                setActive("contact")
              }}

            >Contact</Link>
          </li>
        </ul>

        <div className="flex justify-end items-center flex-1 sm:hidden">
          <img src={
            showMenu ? close : menu
          } alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain '
            onClick={() => { setShowMenu(!showMenu) }}
          />
          <div className={`
                  ${!showMenu ? 'hidden' : 'flex'
            }
                 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
                  `}>
            <ul className='list-none flex max-sm:flex-col gap-4 sm:hidden justify-end items-start'>
            <li>
            <Link to="/#about" className=
              {`
                  ${active === "about" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white text-[16px]`}
              onClick={() => {
                 setShowMenu(!showMenu)
                setActive("about")
              }}

            >About</Link>
          </li>
          <li>
            <Link to="/#tech" className=
              {`
                  ${active === "tech" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white text-[16px]`}
              onClick={() => {
                 setShowMenu(!showMenu)
                setActive("tech")
              }}

            >Skills</Link>
          </li>
          <li>
            <Link to="/#work" className=
              {`
                  ${active === "work" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white text-[16px]`}
              onClick={() => {
                 setShowMenu(!showMenu)
                setActive("work")
              }}

            >Projects</Link>
          </li>
          <li>
            <Link to="/#contact" className=
              {`
                  ${active === "contact" ? "text-white" : "text-secondary"
                } cursor-pointer font-medium hover:text-white text-[16px]`}
              onClick={() => {
                 setShowMenu(!showMenu)
                setActive("contact")
              }}

            >Contact</Link>
          </li>
            </ul>


          </div>


        </div>
      </div>

    </nav>
  )
}

export default Navbar