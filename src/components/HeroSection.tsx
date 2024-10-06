import React from 'react'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Connect Brands with Influencers</h1>
        <p className="text-xl md:text-2xl mb-8">Discover the perfect match for your next campaign</p>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded-lg overflow-hidden p-1">
            <input
              type="text"
              placeholder="Search for influencers or brands..."
              className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection