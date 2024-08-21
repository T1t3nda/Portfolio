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
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p className='text-slate mb-4'>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
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
