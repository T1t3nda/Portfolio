// src/components/Footer.jsx
import React from "react"

const Footer = () => {
  return (
    <footer className='bg-navy py-8 text-center'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate hover:text-green'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href='https://linkedin.com/in/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate hover:text-green'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://codepen.io/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate hover:text-green'
          >
            <i className='fab fa-codepen'></i>
          </a>
          <a
            href='https://instagram.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate hover:text-green'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a
            href='https://twitter.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate hover:text-green'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </div>
        <p className='text-slate text-sm'>Designed & Built by Your Name</p>
      </div>
    </footer>
  )
}

export default Footer
