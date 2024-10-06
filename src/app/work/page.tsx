'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  { 
    title: "Cloud Nine E-commerce", 
    image: "/cloud-nine-ecommerce.jpg", 
    description: "A sleek, cloud-based e-commerce platform with seamless user experience and robust backend.",
    link: "#"
  },
  { 
    title: "Skyward Social Network", 
    image: "/skyward-social.jpg", 
    description: "A modern social networking site built with scalability and real-time interactions in mind.",
    link: "#"
  },
  { 
    title: "Cumulus Content Management", 
    image: "/cumulus-cms.jpg", 
    description: "A flexible and powerful CMS that allows businesses to manage their content effortlessly.",
    link: "#"
  },
  { 
    title: "Stratus Streaming Service", 
    image: "/stratus-streaming.jpg", 
    description: "A high-performance video streaming platform capable of handling millions of concurrent users.",
    link: "#"
  },
  { 
    title: "Nimbus News Portal", 
    image: "/nimbus-news.jpg", 
    description: "A dynamic news aggregation and publishing platform with personalized content delivery.",
    link: "#"
  },
  { 
    title: "Cirrus Customer Relations", 
    image: "/cirrus-crm.jpg", 
    description: "An intuitive CRM system that helps businesses manage their customer relationships effectively.",
    link: "#"
  }
]

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="bg-[#F8F8FF] min-h-screen text-[#4A4A4A] font-sans">
      <div className="container mx-auto py-16">
        <Link href="/" className="inline-flex items-center text-[#4A4A4A] hover:text-[#F4A8A8] mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject !== null && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            className="bg-white rounded-lg p-8 max-w-2xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h2>
            <div className="relative h-64 mb-4">
              <Image 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mb-4">{projects[selectedProject].description}</p>
            <a 
              href={projects[selectedProject].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#ADD8E6] hover:text-[#F4A8A8]"
            >
              Visit Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}