import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#120D0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-[#FF7700] mr-2" />
              <span className="text-2xl font-bold text-[#FF7700]">CreatorBurst</span>
            </Link>
            <p className="text-gray-400">Empowering creators and brands to collaborate and thrive.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#FF7700]"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF7700]"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF7700]"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF7700]"><Youtube /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF7700]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#FF7700]">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#FF7700]">About Us</Link></li>
              <li><Link to="/for-brands" className="text-gray-400 hover:text-[#FF7700]">For Brands</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF7700]">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FF7700]">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7700]">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7700]">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF7700]">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@creatorburst.com" className="text-gray-400 hover:text-[#FF7700]">info@creatorburst.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7700]">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7700]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 CreatorBurst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer