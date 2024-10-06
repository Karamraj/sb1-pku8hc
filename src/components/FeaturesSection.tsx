import React from 'react'
import { Users, Briefcase, BarChart3, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: 'Vast Network',
    description: 'Access a diverse pool of influencers across various niches and platforms.'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
    title: 'Campaign Management',
    description: 'Easily create, manage, and track your influencer marketing campaigns.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
    title: 'Analytics & Insights',
    description: 'Get detailed performance metrics and ROI analysis for your campaigns.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
    title: 'Seamless Communication',
    description: 'Built-in messaging system for smooth collaboration between brands and creators.'
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose InfluConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection