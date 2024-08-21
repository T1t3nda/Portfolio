// src/components/Loader.jsx
import React from "react"
import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-navy'>
      <motion.div
        className='w-16 h-16 border-4 border-green rounded-full'
        animate={{
          rotate: 360,
          borderRadius: ["50%", "0%", "50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

export default Loader
