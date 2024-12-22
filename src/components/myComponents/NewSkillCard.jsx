import React from 'react'
// import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'
import { section } from 'framer-motion/client'
import Tilt from 'react-parallax-tilt'
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";

const NewSkillCard = ({skillArray, index, title}) => {
  // console.log(title)
  return (
    <div className='text-white'>
        <Tilt tiltMaxAngleY={45} tiltMaxAngleX={45} scale={1} transitionSpeed={450}>
            <motion.div variants={fadeIn('right','spring', .5*{index}, .75)} 
            className='xs:w-[450px] w-full bg-[rgba(17,25,40,0.83)] rounded-[20px] min-h-[270px] shadow-newCard px-6 py-5 flex flex-col gap-5'>
              <h3 className="grid-headtext text-center">{title}</h3>
              <div className="flex flex-wrap justify-center mb-[20px] gap-6 max-md:text-[14px] max-sm:p">
                {
                    skillArray.map((tech)=>( 
                      
                        <div className="flex gap-3 text-white  px-4 py-3 rounded-xl border border-gray-400 justify-center items-center">
                          <tech.icon color={`${tech.color}`} className='flex justify-center items-center' size={24}/>
                          <p className="grid-subext text-[16px] font-generalsans text-[#afb0b6]">{tech.name}</p>
                        </div>

                    ))
                }


              </div>
               

            </motion.div>

        </Tilt>
        

    </div>
  )
}

export default NewSkillCard