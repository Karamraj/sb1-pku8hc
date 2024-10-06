import React, { useState, useEffect } from 'react'
import { ArrowRight, Users, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const headings = [
  "Discover Influencers",
  "Amplify Your Brand Story",
  "Dominate Your Market Presence",
  "Transform Engagement into Impact"
];

const BrandsPage = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-dark text-dark dark:text-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {headings[currentHeading]}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl mb-12 text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Harness the power of influencer marketing with creators tailored to your brand.
          </motion.p>
          <motion.a
            href="#"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join us as a Brand
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Connect <span className="text-primary">•</span> Collaborate <span className="text-primary">•</span> Conquest
          </h2>
          {[
            {
              title: "Connect",
              content: "At CreatorBurst, we understand that meaningful connections are the foundation of successful partnerships. We help brands identify and connect with creators whose values and audiences align with their mission. By leveraging our platform, brands can explore a diverse network of influencers to establish authentic relationships that resonate with their target market."
            },
            {
              title: "Collaborate",
              content: "At CreatorBurst, we leverage advanced AI technology to match brands with the most suitable content creators based on their unique needs and goals. Our intelligent algorithms analyze various factors, including audience demographics, engagement rates, and brand values, ensuring that each collaboration is strategically aligned for maximum impact. This data-driven approach allows brands to connect with creators who can authentically represent their message and enhance their marketing efforts."
            },
            {
              title: "Conquest",
              content: "With the right creators matched to your brand, you're now equipped to conquer the market! Our platform empowers brands to take the lead in their marketing efforts by facilitating connections that drive engagement and awareness. While we focus on matching you with top content creators, the execution of campaigns and strategic implementation is entirely in your hands, allowing for tailored approaches that best fit your brand's vision."
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 mr-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {index + 1}
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{step.title}</h3>
                <p className="text-text">{step.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-white rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Join the CreatorBurst Focus Group – Shape the Future of Brand Partnerships!
            </h2>
            <p className="text-center mb-8">
              As a brand, you understand the power of meaningful partnerships. That's why we're inviting you to join our focused group of innovators. Help us create a platform that perfectly aligns with your marketing goals. Shape features, test new solutions, and provide direct feedback to enhance your brand's experience.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="#"
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Focus Group!
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">How You'll Make an Impact</h3>
              <div className="space-y-4">
                {[
                  { icon: <Users />, text: "Step 1: Sign Up and Share Your Insights" },
                  { icon: <Star />, text: "Step 2: Explore Cutting-Edge Tools" },
                  { icon: <Zap />, text: "Step 3: Co-Create Tailored Solutions" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-white dark:bg-dark rounded-lg shadow-md">
                    <div className="text-primary mr-4">{item.icon}</div>
                    <p className="text-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Why You'll Love CreatorBurst</h3>
              <div className="space-y-4">
                {[
                  { icon: <Zap />, text: "Early access to brand-focused features" },
                  { icon: <Users />, text: "Collaborate with a team dedicated to your success" },
                  { icon: <Star />, text: "Exclusive access to connect with top creators" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-white dark:bg-dark rounded-lg shadow-md">
                    <div className="text-primary mr-4">{item.icon}</div>
                    <p className="text-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            FAQs - Everything you need to know
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How does CreatorBurst match brands with creators?",
                answer: "We use advanced AI technology to analyze your brand's needs and objectives, pairing you with the most suitable content creators based on audience demographics, engagement rates, and brand alignment."
              },
              {
                question: "Is there a cost to join the Focus Group?",
                answer: "No, joining the CreatorBurst Focus Group is free for brands! By participating, you'll gain early access to new features and have the opportunity to shape the platform without any initial cost."
              },
              {
                question: "What types of creators are available on the platform?",
                answer: "CreatorBurst features a diverse range of content creators across various niches and platforms, ensuring you find the right match for your brand's specific goals."
              },
              {
                question: "Can I communicate directly with creators through CreatorBurst?",
                answer: "Yes! Once matched, you can engage directly with creators to discuss collaboration opportunities and align on campaign strategies."
              },
              {
                question: "How do I ensure a successful collaboration with a creator?",
                answer: "To ensure a successful collaboration, clearly communicate your brand objectives, expectations, and desired outcomes with the creator. Our platform provides the tools to facilitate these conversations."
              },
              {
                question: "What if I need help finding the right creator?",
                answer: "If you're unsure about the best creators for your brand, our platform provides recommendations based on your needs. You can reach out to our support team via the contact page or email us directly at support@creatorburst.com."
              }
            ].map((faq, index) => (
              <details key={index} className="border-b border-gray-200 pb-4">
                <summary className="text-lg font-semibold cursor-pointer focus:outline-none">
                  {faq.question}
                </summary>
                <p className="mt-2 text-text">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default BrandsPage