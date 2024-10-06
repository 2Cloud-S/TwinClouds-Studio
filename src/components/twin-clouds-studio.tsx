'use client'

import { Sun, Moon, Zap, Search, Users, BarChart, ArrowRight, Star, Cloud, Rocket, ThumbsUp, User, Calendar, TrendingUp } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export function TwinCloudsStudio() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#ADD8E6] text-[#4A4A4A] font-sans">
      <header className="bg-[#F8F8FF] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="/Header-logo.png"
                alt="TwinClouds Studio Header Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#ADD8E6]">TwinClouds Studio</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/work" className="hover:text-[#F4A8A8]">Work</Link></li>
              <li><button onClick={scrollToServices} className="hover:text-[#F4A8A8]">Capabilities</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-[#F4A8A8]">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-[#F4A8A8]">About</button></li>
            </ul>
          </nav>
          <Link href="/contact">
            <button className="bg-[#F4A8A8] text-white px-4 py-2 rounded-full hover:bg-[#D8BFD8] transition-colors">
              Hire us
            </button>
          </Link>
        </div>
      </header>

      <main>
        <section className="py-20 text-center bg-gradient-to-b from-[#ADD8E6] to-[#F8F8FF] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="TwinClouds Studio Logo"
              width={1000}
              height={1000}
              className="w-auto h-auto max-w-none"
              style={{ opacity: 0.4 }}
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-6xl font-bold mb-4">WEBSITE EXPERTS</h2>
            <div className="text-8xl font-bold text-white opacity-50 mb-8">TwinClouds Studio</div>
            <p className="text-2xl mb-8">Crafting digital skyscapes for your online presence</p>
            <Link href="/contact">
              <button className="bg-[#F4A8A8] text-white px-6 py-3 rounded-full hover:bg-[#D8BFD8] transition-colors text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </section>

        <section id="about" className="py-16 bg-[#F8F8FF]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8">About TwinClouds Studio</h2>
            <div className="flex items-center space-x-8">
              <div className="flex-1">
                <p className="text-xl mb-4">
                  We are a cutting-edge web design agency based in the cloud, specializing in crafting
                  unique and stunning websites for brands that aim to make a lasting impression. Our
                  team of cloud experts are dedicated to creating visually captivating and functional
                  websites that set our clients apart from the competition. Contact us today to elevate
                  your online presence and drive meaningful results.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/Logo128.png"
                    alt="TwinClouds Studio Logo"
                    width={228}
                    height={228}
                    className="w-50 h-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FFFACD]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Don't settle for average web development.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: '3K', description: 'More Users', icon: Users },
                { metric: '20K', description: 'Appointments', icon: Calendar },
                { metric: '15%', description: 'Increased Visits', icon: TrendingUp },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`
                    ${index === 1 ? 'bg-[#4A4A4A] text-white' : 'bg-white'} 
                    rounded-lg shadow-md overflow-hidden 
                    transform transition duration-300 hover:scale-105 hover:shadow-xl
                  `}
                >
                  <div className="p-6">
                    <item.icon className="w-16 h-16 mb-4 mx-auto text-[#ADD8E6]" />
                    <h3 className="text-3xl font-bold mb-2 text-center">{item.metric}</h3>
                    <p className="text-center">{item.description}</p>
                  </div>
                  <div className="h-2 bg-[#ADD8E6] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/project-brief">
                <button className="
                  bg-[#F4A8A8] text-white px-6 py-3 rounded-full 
                  hover:bg-[#D8BFD8] transition-colors duration-300
                  transform hover:scale-110 hover:shadow-lg
                  animate-pulse
                ">
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-[#4A4A4A] text-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2A2A2A] p-6 rounded-lg">
                <Zap className="w-12 h-12 text-[#ADD8E6] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Website Assessment</h3>
                <p className="mb-4">Do you have a website that's not performing as expected? Or maybe you want to explore the full potential of your website? Begin by taking advantage of our comprehensive website assessment service.</p>
                <p className="text-[#ADD8E6]">Available for Hire</p>
                <a href="#" className="text-[#ADD8E6] hover:underline mt-2 inline-block">Contact us for estimate <ArrowRight className="inline w-4 h-4" /></a>
              </div>
              <div className="bg-[#2A2A2A] p-6 rounded-lg">
                <Search className="w-12 h-12 text-[#ADD8E6] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Competitor Research</h3>
                <p>Looking to gain valuable insights from your competitors? Our expert analysis highlights the best and worst practices they employ. Stay informed about the latest industry trends and competitive landscape to make informed business decisions.</p>
              </div>
              <div className="bg-[#2A2A2A] p-6 rounded-lg">
                <Users className="w-12 h-12 text-[#ADD8E6] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Website Retainer</h3>
                <p>You have the option to choose this service either immediately or after your website has been launched with us. Our team will handle all necessary tweaks, updates, and day-to-day management of your site. This service is completely customizable based on your specific needs, which may affect the associated costs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8F8FF]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet the Cloud Weavers</h2>
            <div className="flex justify-center space-x-8">
              {["Alice", "Bob"].map((name, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-44 h-44 rounded-full bg-white mx-auto mb-4 flex items-center justify-center shadow-md overflow-hidden">
                    <Image
                      src={index === 0 ? "/Cloud1.png" : "/Cloud2.png"}
                      alt={`${name}'s Avatar`}
                      width={index === 0 ? 160 : 176}
                      height={index === 0 ? 160 : 176}
                      className={`object-contain ${index === 0 ? 'w-36 h-36' : 'w-40 h-40'} transition-transform duration-300 hover:scale-110`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="text-[#4A4A4A]">Cloud Architect</p>
                  <p className="text-[#ADD8E6] mt-2">{name.toLowerCase()}@twinclouds.studio</p>
                  <button className="mt-4 bg-[#F4A8A8] text-white px-4 py-2 rounded-full hover:bg-[#D8BFD8] transition-colors transform hover:scale-105">
                    Unlock random facts
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-[#4A4A4A] text-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Don't just take our word for it</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  text: "TwinClouds Studio transformed our online presence. Their cloud-inspired design perfectly captured our brand's innovative spirit.",
                  company: "Tech Innovators Inc."
                },
                {
                  text: "Working with TwinClouds was a breeze. They delivered a stunning website that exceeded our expectations and boosted our conversions.",
                  company: "E-commerce Solutions"
                },
                {
                  text: "The team at TwinClouds Studio truly understands the power of cloud-based design. Our new site is fast, responsive, and visually striking.",
                  company: "CloudNet Systems"
                },
                {
                  text: "TwinClouds Studio's expertise in cloud-inspired design gave our startup the professional edge we needed. Highly recommended!",
                  company: "NextGen Startups"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-[#2A2A2A] p-6 rounded-lg flex flex-col h-full transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-[#FFFACD] transition-all duration-300 hover:scale-125" fill="#FFFACD" />
                    ))}
                  </div>
                  <p className="mb-4 flex-grow">{testimonial.text}</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#ADD8E6] mr-4 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      <User className="w-8 h-8 text-[#4A4A4A]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Happy Client</h4>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8F8FF]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Benefits of building your site with us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: BarChart, title: "80+", description: "Successful Projects" },
                { icon: Rocket, title: "FAST", description: "Development" },
                { icon: ThumbsUp, title: "100%", description: "Happy Customers" },
                { icon: Cloud, title: "Cloud-First", description: "Approach" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative w-20 h-20 mx-auto mb-4 group">
                    <item.icon className="w-full h-full text-[#ADD8E6] transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#ADD8E6] rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-100"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#ADD8E6]">{item.title}</h3>
                  <p className="transition-colors duration-300 group-hover:text-[#4A4A4A]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FFFACD]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { slug: "cloud-computing-trends", title: "Cloud Computing Trends", image: "/cloud-computing.jpg" },
                { slug: "responsive-design-tips", title: "Responsive Design Tips", image: "/responsive-design.jpg" },
                { slug: "seo-for-cloud-services", title: "SEO for Cloud Services", image: "/seo-cloud.jpg" }
              ].map((post, index) => (
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
                      <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#ADD8E6]">{post.title}</h3>
                      <p className="text-sm mb-4">
                        Learn about the latest trends and best practices in cloud-based web development.
                      </p>
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
            <div className="text-center mt-8">
              <Link href="/blog">
                <button className="
                  bg-[#F4A8A8] text-white px-6 py-2 rounded-full 
                  hover:bg-[#D8BFD8] transition-colors duration-300
                  transform hover:scale-105 hover:shadow-lg
                ">
                  Browse all articles
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#4A4A4A] text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">TwinClouds Studio</h3>
              <p>Elevating your online presence with clou d-inspired web solutions.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
                <li><a href="#" className="hover:text-[#ADD8E6]">Home</a></li>
                <li><a href="#" className="hover:text-[#ADD8E6]">Work</a></li>
                <li><a href="#" className="hover:text-[#ADD8E6]">Capabilities</a></li>
                <li><a href="#" className="hover:text-[#ADD8E6]">About</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p>Email: hello@twinclouds.studio</p>
              <p>Phone: (123) 456-7890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-[#ADD8E6]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#ADD8E6]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.023-.047 1.351-.058 3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#ADD8E6]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 TwinClouds Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}