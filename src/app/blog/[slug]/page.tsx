'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Dummy data for articles
const articles = {
  "cloud-computing-trends": {
    title: "Cloud Computing Trends",
    image: "/cloud-computing.jpg",
    content: `
      <p>Cloud computing has revolutionized the way businesses operate and manage their IT infrastructure. As we move further into the digital age, several key trends are shaping the future of cloud computing:</p>
      <h2>1. Edge Computing</h2>
      <p>Edge computing is gaining traction as organizations seek to process data closer to its source. This trend reduces latency and improves real-time data processing capabilities.</p>
      <h2>2. Serverless Computing</h2>
      <p>Serverless architectures are becoming increasingly popular, allowing developers to focus on writing code without worrying about infrastructure management.</p>
      <h2>3. Multi-Cloud Strategies</h2>
      <p>Many businesses are adopting multi-cloud approaches to avoid vendor lock-in and optimize their cloud usage across different providers.</p>
      <h2>4. AI and Machine Learning Integration</h2>
      <p>Cloud providers are increasingly offering AI and machine learning services, making these technologies more accessible to businesses of all sizes.</p>
      <h2>5. Enhanced Security Measures</h2>
      <p>As cloud adoption grows, so does the focus on security. Advanced encryption, zero-trust security models, and improved compliance features are becoming standard in cloud offerings.</p>
    `,
    author: "Alice Cloud",
    date: "2023-05-15"
  },
  // Add more articles here...
}

export default function Article({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the article data from an API
    // For now, we're using the dummy data
    setArticle(articles[params.slug as keyof typeof articles])
  }, [params.slug])

  if (!article) return <div>Loading...</div>

  return (
    <div className="bg-[#F8F8FF] min-h-screen text-[#4A4A4A] font-sans">
      <div className="container mx-auto py-16">
        <Link href="/blog" className="inline-flex items-center text-[#4A4A4A] hover:text-[#F4A8A8] mb-8">
          <ArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <article className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="mb-4 text-sm text-gray-600">
            By {article.author} | {article.date}
          </div>
          <div className="relative w-full h-64 mb-8">
            <Image 
              src={article.image} 
              alt={article.title} 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </article>
      </div>
    </div>
  )
}