import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import Tilt from 'react-tilt';

const  ServiceCard = ({index, title}) => (
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
)

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a software developer with 3 years of experience, specializing in web 
      and mobile applications , and expertise in frameworks like React,Node.js, Laravel and  Flutter.
      I am a quick learner and collaborate closely with clients to bring ideas to
      life. I am always looking for new and innovative ways to improve my skills and stay 
      ahead in the rapidly evolving field of software development.
      </motion.p>
    </>
  )
}

export default About