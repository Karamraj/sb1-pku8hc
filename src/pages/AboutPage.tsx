import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, Users, Briefcase, Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  return (
    <div className="bg-background text-text">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Journey: Building the Future of Creator Collaboration
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CreatorBurst This Side 👋
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {[
              {
                title: "The Inspiration",
                content: "In a world where creators are often overlooked, Karamraj Singh Anand and Shivam Ratne were inspired to empower voices that matter. Their shared experiences during a summer internship sparked a vision to create a platform that amplifies creator potential while bridging the gap between creators and brands. This inspiration laid the groundwork for CreatorBurst, where authenticity and collaboration reign supreme."
              },
              {
                title: "The Start",
                content: "In June 2024, the seeds of CreatorBurst were planted. With determination and a clear vision, the Founders embarked on their journey. By late September, the duo expanded their team, bringing together a group of passionate individuals dedicated to turning this vision into a reality. With countless brainstorming sessions, late nights, and relentless effort, the foundation of CreatorBurst began to take shape."
              },
              {
                title: "All Set to Fly",
                content: "As we move forward, CreatorBurst is on the brink of launching our MVP. With rigorous testing, community engagement, and continuous refinement, we're preparing to launch a platform that revolutionizes creator-brand collaboration. Join us as we spread our wings and take flight, empowering creators and brands to connect like never before. The sky is just the beginning!"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{step.title}</h3>
                  <p className="text-text">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl">Together, We Empower Creators and Brands to Build Meaningful Connections That Inspire Growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                At CreatorBurst, our mission is to empower creators and brands by fostering authentic collaborations that inspire innovation and creativity. We believe that every creator has a unique voice, and we strive to amplify those voices through a dynamic platform that connects them with brands that share their values. Our goal is to create opportunities for meaningful partnerships that benefit both creators and brands, enhancing the overall landscape of influencer marketing.
              </p>
            </div>
            <motion.div
              className="bg-white rounded-2xl h-64"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
            <motion.div
              className="bg-white rounded-2xl h-64"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
            <div>
              <p className="text-lg leading-relaxed">
                We are committed to building an inclusive community where diverse talents can thrive. By listening to the needs of our users and continuously refining our platform, we aim to reshape how creators and brands collaborate. Together, we can ignite the future of creator collaboration, making it accessible and impactful for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Values That Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart className="w-12 h-12 text-primary" />, title: "Authenticity", description: "Fostering genuine connections that build trust and transparency." },
              { icon: <Users className="w-12 h-12 text-primary" />, title: "Community Empowerment", description: "Creating an inclusive environment that uplifts diverse voices and supports collaborative growth." },
              { icon: <Zap className="w-12 h-12 text-primary" />, title: "Innovation", description: "Driving creativity and continuous improvement in all that we do." }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{value.title}</h3>
                <p className="text-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">The Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[...Array(15)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-white mx-auto mb-4"></div>
                <h3 className="font-semibold mb-1">Team Member {index + 1}</h3>
                <p className="text-sm mb-2">Position</p>
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Join Our Team and Ignite Your Career!</h2>
              <p className="text-text mb-8">
                At CreatorBurst, we believe in the power of collaboration and creativity. We're on the lookout for passionate individuals who are ready to make an impact in the world of creator-brand partnerships. If you're eager to innovate, grow, and be part of a dynamic team that's reshaping the future of Influencer & Creators, we want to hear from you!
              </p>
              <motion.a
                href="#"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 inline-flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Career Opportunities
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
            <motion.div
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-64"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;