import { section } from 'framer-motion/client'
import React from 'react'
import { ComputersCanvas } from './canvas'
import { Typewriter } from 'react-simple-typewriter'
import JumpingCube from './myComponents/JumpingBall'
import { useState, useEffect } from 'react'

const Hero = () => {

  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

return (
   <section className='relative w-full min-h-screen mx-auto xl:mb-20 max-sm:mb-28 sm:mb-52 max-xs:min-h-[95vh]'>
   

    <div className="sm:px-16 px-6 relative inset-0 top-[120px] max-xs:top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5">
    <div className="flex flex-col justify-center items-center mt-5">
      <div className='h-5 w-5 rounded-full bg-[#915eff]'></div>
      <div className="w-1 sm:h-70 h-40 violet-gradient"></div>

    </div>
    <div>

    <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Hi I'm<span className='text-[#915eff]'> Srikar</span>
    </h1>


    {/* animated text */}
    <h3 className='mt-2 text-gray-100 font-semibold lg:text-[32px] sm:text-[26px] xs:text-[22px] text-[16px] lg:leading-[40px] flex gap-3  mb-4'>
    I'm a&nbsp;
      <span style={{ color: '#915eff' }}>
        <Typewriter
          words={['Frontend Developer.', 'Full Stack Developer.', 'Programmer.', 'Music Lover 🎵.']}
          loop={false} // Loops through the words 5 times (set to `false` for infinite)
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1000}
          />
      </span>

    </h3>
          {/* <p className="mt-2 text-white-700 font-normal  xs:text-[20px] text-[16px] mb-16">
            
            I'm a software developer with a passion for<br className='sm:block hidden'/>building engaging user experiences.
            </p>
            <button className='flex gap-4 items-center justify-center cursor-pointer p-3 rounded-3xl bg-orange-400   transition-all active:scale-95 text-white mx-auto'
            onClick={()=>{
              window.open(resume, '_blank')
              }}
              >
              Check resume

            </button> */}

    </div>
    </div>
 
      <ComputersCanvas className='max-w-screen-2xl'/>
      <div className='w-[200px] max-md:h-5 h-10 absolute max-md:left-0 max-sm:top-[80vh] max-md:top-[75vh] lg:top-36 xl:right-[39vw] lg:right-[28vw]  z-0 origin-bottom rotate-90 xl:rotate-90 max-md:mt-4 max-xs:top-[65vh]'>
      <JumpingCube isMdScreen={isMdScreen} />
    </div>   


   </section>
  )
}


export default Hero
