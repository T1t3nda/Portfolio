// src/components/About.jsx
import React, { forwardRef } from "react"
import { motion } from "framer-motion"
import Tatenda from "../assets/tatenda.jpg"

const About = forwardRef((props, ref) => {
  return (
    <motion.section
      id='about'
      ref={ref}
      className='py-20 bg-light-navy'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-lightest-slate mb-8'>
          About Me
        </h2>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-2/3 mb-8 md:mb-0'>
            <p className='text-slate mb-4'>
              Hello! My name is Tatenda Mandiuda, and I am a passionate technology enthusiast with a degree in Computer Information Systems from the University of the Free State. Throughout my academic journey, I developed a strong foundation in programming, data management, and system analysis, equipping me with the skills to tackle complex challenges in the ever-evolving tech landscape. 
            </p>
            <p className='text-slate mb-4'>
              Throughout my journey, I have immersed myself in learning various programming languages and tools to enhance my skills as a developer. From mastering the fundamentals of C# and Javascript to diving into frameworks like React and ASP.NET, each new language has broadened my understanding of software development and empowered me to tackle a diverse range of projects..
            </p>
            <p className='text-slate'>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className='grid grid-cols-2 gap-2 mt-4 text-green'>
              <li>HTML & CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>C#</li>
              <li>ASP.NET</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className='md:w-1/3 md:pl-8'>
            <img
              src={Tatenda}
              alt='Tatenda Mandiudza'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
})

export default About
