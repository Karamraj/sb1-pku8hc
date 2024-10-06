import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Zap, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < lastScrollY) {
      setIsVisible(true)
    } else if (latest > 100 && latest > lastScrollY) {
      setIsVisible(false)
    }
    setLastScrollY(latest)
  })

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 bg-background shadow-lg`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Zap className="h-8 w-8 text-primary mr-2" />
          <span className="text-2xl font-bold text-primary">CreatorBurst</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link 
            to="/about" 
            className={`text-text hover:text-primary transition-colors underline-draw ${isActive('/about') ? 'text-primary' : ''}`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`text-text hover:text-primary transition-colors underline-draw ${isActive('/contact') ? 'text-primary' : ''}`}
          >
            Contact Us
          </Link>
          {location.pathname === '/for-brands' ? (
            <Link 
              to="/" 
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors"
            >
              For Creators
            </Link>
          ) : (
            <Link 
              to="/for-brands" 
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors"
            >
              For Brands
            </Link>
          )}
          <button onClick={toggleTheme} className="text-text hover:text-primary transition-colors">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header