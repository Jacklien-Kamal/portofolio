
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const SkillDataProvider = ({ src, width, height, index,title} ) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
  <motion.div
  className='flex flex-col items-center'
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  >
    <img
src={src}
width={width}
height={height}
alt='skill image'
    />
    <p>{title}</p>
  </motion.div>
  )
}

export default SkillDataProvider