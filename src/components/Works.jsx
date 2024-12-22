import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants/index'
import ProjectCard from './myComponents/ProjectCard'
import SectionWrapper from './hoc/SectionWrapper'
const Works = () => {
  return (
    <div className='sm:px-16 px-6 max-w-screen-2xl mx-auto mt-32 mb-52 max-sm:mb-40' id='works'>
      <motion.div variants={textVariant()}>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] "> Projects</h3>

      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', .1, 1)} className="mt-3 max-w-3xl leading-[30px] text-[#aaa6c3]">
          I'm a full-stack developer with a passion for building scalable and efficient web applications. I've
          worked on various projects, from simple web pages to complex e-commerce platforms. My expertise includes
          HTML, CSS, JavaScript, React, Node.js, and MongoDB.

        </motion.p>

      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index) => {
            return (
              <ProjectCard key={index} index={index} {...project} />
            )

          })
        }
      </div>

    </div>
  )
}

export default SectionWrapper(Works,'works') 