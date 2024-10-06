import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="bg-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Marketing?</h2>
        <p className="text-xl text-gray-600 mb-8">Join InfluConnect today and start creating impactful collaborations.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center">
            For Brands
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 flex items-center">
            For Creators
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection