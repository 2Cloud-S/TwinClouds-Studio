'use client'

import { useState } from 'react'
import { ArrowLeft, Check, HelpCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[]; // Change this from never[] to string[]
}

export default function ProjectBrief() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [] // Initialize as an empty array of strings
  })

  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      features: checked
        ? [...prevState.features, name]
        : prevState.features.filter(feature => feature !== name)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-[#F8F8FF] to-[#ADD8E6] min-h-screen text-[#4A4A4A] font-sans">
      <div className="container mx-auto py-16 px-4">
        <Link href="/" className="inline-flex items-center text-[#4A4A4A] hover:text-[#F4A8A8] mb-8 transition-colors duration-300">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-[#4A4A4A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Start Your Project
        </motion.h1>
        
        <motion.div 
          className="bg-white rounded-lg shadow-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#ADD8E6]">Project Questionnaire</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium mb-2">Company (if applicable)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                required
              >
                <option value="">Select a project type</option>
                <option value="website">Website</option>
                <option value="webapp">Web Application</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                required
              >
                <option value="">Select a budget range</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-20000">$10,000 - $20,000</option>
                <option value="20000-50000">$20,000 - $50,000</option>
                <option value="50000+">$50,000+</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">Desired Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                required
              >
                <option value="">Select a timeline</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value="12months+">12+ months</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium mb-2">Project Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Desired Features</label>
              <div className="space-y-2">
                {['Responsive Design', 'Content Management System', 'E-commerce Functionality', 'User Authentication', 'API Integration', 'Analytics'].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      id={feature}
                      name={feature}
                      checked={formData.features.includes(feature)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label htmlFor={feature}>{feature}</label>
                  </div>
                ))}
              </div>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#F4A8A8] text-white py-3 px-6 rounded-full hover:bg-[#D8BFD8] transition-colors duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Project Brief
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#ADD8E6]">Our Development Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            {[
              "Initial Consultation and Project Brief Review",
              "Project Proposal and Contract",
              "Design Phase (Wireframes and Mockups)",
              "Development Phase",
              "Testing and Quality Assurance",
              "Client Review and Feedback",
              "Final Adjustments and Launch",
              "Post-Launch Support and Maintenance"
            ].map((step, index) => (
              <motion.li 
                key={index}
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#ADD8E6]">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$5,000 - $10,000', features: ['Responsive Design', 'Up to 5 Pages', 'Basic SEO', '1 Month Support'] },
              { name: 'Professional', price: '$10,000 - $20,000', features: ['Responsive Design', 'Up to 10 Pages', 'Advanced SEO', 'Content Management System', '3 Months Support'] },
              { name: 'Enterprise', price: '$20,000+', features: ['Responsive Design', 'Unlimited Pages', 'Advanced SEO', 'Content Management System', 'E-commerce Functionality', 'Custom Features', '6 Months Support'] }
            ].map((tier, index) => (
              <motion.div 
                key={tier.name} 
                className="border rounded-lg p-6 flex flex-col bg-gradient-to-b from-white to-[#F8F8FF] shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <h3 className="text-2xl font-bold mb-2 text-[#4A4A4A]">{tier.name}</h3>
                <p className="text-3xl font-bold mb-4 text-[#F4A8A8]">{tier.price}</p>
                <ul className="list-none space-y-2 mb-6 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * featureIndex }}
                    >
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.button 
                    className="w-full bg-[#ADD8E6] text-white py-2 px-4 rounded-full hover:bg-[#F4A8A8] transition-colors duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#ADD8E6]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { question: "How long does a typical project take?", answer: "Project timelines can vary depending on complexity, but most projects are completed within 2-4 months." },
              { question: "Do you offer ongoing maintenance and support?", answer: "Yes, we offer various maintenance and support packages to keep your website up-to-date and running smoothly." },
              { question: "Can you work with my existing brand guidelines?", answer: "Absolutely! We'll integrate your brand identity into the design to ensure consistency across all platforms." },
              { question: "Do you provide hosting services?", answer: "While we don't provide hosting directly, we can recommend reliable hosting providers and assist with setup." },
              { question: "How do you handle project changes or additional features?", answer: "We have a change request process in place. Additional features or changes are evaluated and quoted separately." }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-[#ADD8E6]" />
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ADD8E6] transform transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}