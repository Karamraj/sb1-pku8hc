import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Star, Rocket, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const headings = [
  "Connect With Brands",
  "Boost Your Influence",
  "Build Authentic Partnerships",
  "Unlock New Opportunities"
];

const LandingPage = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={targetRef} className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
          <motion.div 
            className="text-center"
            style={{ y, opacity }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white">
              <span className="underline-draw">{headings[currentHeading]}</span>
            </h1>
            <p className="text-2xl md:text-4xl mb-12 text-white">
              Get more than just brand deals. Build, grow, and thrive with CreatorBurst.
            </p>
            <motion.a
              href="#"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join us as an Influencer
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </section>

        <AnimatedSection className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-text">
              <span className="gradient-text">What's CreatorBurst For You</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">For Creators</h3>
                <p className="text-text leading-relaxed">
                  CreatorBurst is your ultimate launchpad for content creation, management, and collaboration. Connect with top brands, streamline your workflow, and skyrocket your influence to new heights.
                </p>
              </div>
              <motion.div
                className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-64"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
              <motion.div
                className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-64"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">For Brands</h3>
                <p className="text-text leading-relaxed">
                  Discover and collaborate with the world's most creative minds to tell your brand story. Our innovative AI Driven marketplace and campaign management tools make influencer marketing more effective and exciting than ever.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-primary rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-6 gradient-text">
                Join the CreatorBurst Focus Group – Help Shape the Future!
              </h2>
              <p className="text-text text-center mb-8">
                As a creator, you know what works best. That's why we're inviting you to join our focused group of influencers. Help us build a platform that's perfect for your needs. Shape features, test new tools, and give direct feedback.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="#"
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 flex items-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Burst into the Focus Group
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">How You'll Make an Impact</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Users />, text: "Step 1: Sign Up and Share Your Input" },
                    { icon: <Star />, text: "Step 2: Test Exclusive Features" },
                    { icon: <Zap />, text: "Step 3: Help Shape the Platform" }
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
                    { icon: <Rocket />, text: "Get early access to new features" },
                    { icon: <Users />, text: "Collaborate directly with our team" },
                    { icon: <Star />, text: "Exclusive opportunities and shout-outs" }
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

        <AnimatedSection className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-dark rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Partner with top creators to amplify your brand's voice and reach real audiences.
              </h2>
              <motion.a
                href="#"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 inline-flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More for Brands
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
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
                  question: "What is CreatorBurst?",
                  answer: "CreatorBurst is a platform that connects creators with brands to foster authentic partnerships and drive growth for both parties."
                },
                {
                  question: "How can I join the CreatorBurst Focus Group?",
                  answer: "You can join our Focus Group by signing up on our homepage. We will contact you with further details shortly."
                },
                {
                  question: "What are the benefits of joining the CreatorBurst Focus Group?",
                  answer: "As a member, you'll gain access to exclusive features, collaborate directly with our team, and unlock opportunities to monetize your content."
                },
                {
                  question: "How do brands collaborate with creators on CreatorBurst?",
                  answer: "Brands can find creators that match their values and campaigns, enabling authentic collaborations that resonate with their target audience using AI."
                },
                {
                  question: "Is there a cost to join CreatorBurst Focus Group?",
                  answer: "Joining CreatorBurst is free, and we are dedicated to supporting creators and brands on their growth journey. While participation in the Focus Group is complimentary, please note that we will introduce a subscription model in the future to enhance our offerings."
                },
                {
                  question: "How do I get support if I have more questions?",
                  answer: "You can reach out to our support team via the contact page or email us directly at support@creatorburst.com."
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
    </div>
  );
};

export default LandingPage;