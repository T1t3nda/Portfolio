// src/components/Hero.jsx
import React from "react"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import CV from "../assets/MandiudzaTatenda.pdf"

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Web Developer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  })

  return (
    <motion.section
      className='min-h-screen flex items-center justify-center relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-lightest-slate mb-4'>
          Brittany Chiang
        </h1>
        <h2 className='text-3xl text-green mb-6'>
          <span>{text}</span>
          <Cursor cursorColor='#64ffda' />
        </h2>
        <p className='text-xl text-slate max-w-lg mx-auto mb-8'>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <motion.a
          href='/path-to-your-cv.pdf'
          download
          className='bg-green text-navy px-6 py-3 rounded-full font-semibold hover:bg-light-green transition duration-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Hero
