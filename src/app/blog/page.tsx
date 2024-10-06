'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  { slug: "cloud-computing-trends", title: "Cloud Computing Trends", image: "/cloud-computing.jpg", excerpt: "Explore the latest trends in cloud computing and how they're shaping the future of web development." },
  { slug: "responsive-design-tips", title: "Responsive Design Tips", image: "/responsive-design.jpg", excerpt: "Learn essential tips and tricks for creating responsive designs that work seamlessly across all devices." },
  { slug: "seo-for-cloud-services", title: "SEO for Cloud Services", image: "/seo-cloud.jpg", excerpt: "Discover effective SEO strategies specifically tailored for cloud-based services and websites." },
  { slug: "future-of-web-hosting", title: "The Future of Web Hosting", image: "/web-hosting.jpg", excerpt: "Dive into the future of web hosting and learn how cloud technologies are revolutionizing the industry." },
  { slug: "optimizing-cloud-performance", title: "Optimizing Cloud Performance", image: "/cloud-performance.jpg", excerpt: "Explore techniques and best practices for optimizing the performance of your cloud-based applications." },
  { slug: "security-in-the-cloud", title: "Security in the Cloud", image: "/cloud-security.jpg", excerpt: "Learn about the latest security measures and best practices for keeping your cloud-based projects safe." }
]

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="bg-[#F8F8FF] min-h-screen text-[#4A4A4A] font-sans">
      <div className="container mx-auto py-16">
        <Link href="/" className="inline-flex items-center text-[#4A4A4A] hover:text-[#F4A8A8] mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Read More</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-[#ADD8E6]">{post.title}</h3>
                  <p className="text-sm mb-4">{post.excerpt}</p>
                  <span 
                    className="text-[#ADD8E6] hover:text-[#F4A8A8] transition-colors duration-300 inline-flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === i + 1 ? 'bg-[#F4A8A8] text-white' : 'bg-white text-[#4A4A4A]'
              } hover:bg-[#D8BFD8] transition-colors duration-300`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}