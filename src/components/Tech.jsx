import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { section } from 'framer-motion/client'
import SectionWrapper from './hoc/SectionWrapper'
import skills from '../assets/icons/index'
import NewSkillCard from './myComponents/NewSkillCard'
const Tech = () => {
  return (
    <section className='sm:px-16 px-6 mt-10 max-w-screen-2xl mx-auto mb-52 max-sm:mb-40' id='tech'>
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-white-600 text-[17px] max-w-3xl leading[30px]'>
        I am skilled with React, Node.js, MongoDB, and SQL, with expertise in modern styling tools like CSS, Tailwind CSS, and Sass, as well as animation frameworks such as Framer Motion. I also have strong problem-solving abilities and a solid foundation in data structures and algorithms, enabling me to build efficient and innovative software solutions.

      </motion.p>


      {/* this is the new card */}
      <div className="mt-20 flex flex-wrap gap-10 items-start justify-center xl:px-40 xl:justify-evenly xl:items-center">
        {

          Object.entries(skills).map(([category, skillArray], categoryIndex) => {
            return (
              <NewSkillCard
                key={category}
                title={category}
                skillArray={skillArray}
                index={categoryIndex}
              />
            )

          })}

      </div>
    </section>

  )
}

export default SectionWrapper(Tech, 'tech')