// src/components/Header.jsx
import React from "react"
import { Link } from "react-router-dom"

const Header = ({ aboutRef, projectsRef }) => {
  const handleLinkClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className='fixed w-full bg-navy z-50'>
      <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <Link to='/' className='text-green text-xl font-semibold'>
          Tatenda
        </Link>
        <div className='space-x-4'>
          <Link
            to='/'
            className='text-slate hover:text-green transition-colors'
            onClick={() => handleLinkClick(aboutRef)}
          >
            About
          </Link>
          <Link
            to='/'
            className='text-slate hover:text-green transition-colors'
            onClick={() => handleLinkClick(projectsRef)}
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
