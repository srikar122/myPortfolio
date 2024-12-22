import React from 'react'
// import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'
import { section } from 'framer-motion/client'
import Tilt from 'react-parallax-tilt'
const SkillCard = ({index,title,icon}) => {
  return (
    <div className='text-white'>
        <Tilt className='xs:w-[250px] w-full' tiltMaxAngleY={45} tiltMaxAngleX={45} scale={1} transitionSpeed={450}>
            <motion.div variants={fadeIn('right','spring', .5*{index}, .75)} 
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center px-12 py-5" >
                    <img src={icon} alt='icon' className='w-16 h-16 object-contain'/>
                  <h3 className="text-white font-bold text-[20px] text-center">{title}</h3>
                </div>

            </motion.div>

        </Tilt>
        

    </div>
  )
}

export default SkillCard