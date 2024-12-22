import React from 'react'
import { fadeIn, textVariant } from '../../utils/motion'
import {projects} from '../../constants/index'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { FaGithub } from 'react-icons/fa6'
const ProjectCard = ({index,name,description,tags,source_code_link,image}) => {
  return (
    <motion.div variants={fadeIn('up','spring',index*.5, 0.75)} >

    <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1} transitionSpeed={450} className='bg-tertiary p-5 rounded-2xl w-full sm:w-[320px] min-h-[455px] sm:min-h-[540px]'>
        <div className=' relative w-full min-h-full group '>
            <img src={image} alt="name" className='w-full  h-[220px] sm:h-[190px] rounded-2xl object- group-hover:opacity-50' />
            <div className='absolute right-0 top-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 social-icon'>
                <a href={source_code_link} target="_blank">
                        <FaGithub size={25} color='white' />
                </a>

            </div>
            <div className="mt-5 flex flex-col justify-between">
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className="text-white-700 mt-2 text-[15px]">{description}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                    {
                      tags.map((tag,index)=>(
                        <p className={`text-[15px] ${tag.color}`} >{tag.name}</p>
                      ))
                    }

                </div>
            </div>
        </div>

    </Tilt>


    </motion.div>
  )
}

export default ProjectCard