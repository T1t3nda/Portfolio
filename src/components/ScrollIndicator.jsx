// src/components/ScrollIndicator.jsx
import React from "react"
import { motion } from "framer-motion"

const ScrollIndicator = () => {
  return (
    <motion.div
      className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <svg
        width='30'
        height='30'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 5V19'
          stroke='#64ffda'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19 12L12 19L5 12'
          stroke='#64ffda'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </motion.div>
  )
}

export default ScrollIndicator
