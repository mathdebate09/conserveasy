import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { MapPin, Phone, Mail } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="-mt-20">
      <Parallax
        bgImage="https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?ga=GA1.1.1224084992.1724687142&semt=ais_hybrid"
        strength={500}
        className="h-[60vh] flex items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white text-center"
        >
          Contact Us
        </motion.h1>
      </Parallax>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg mb-8">
                We&apos;d love to hear from you. Whether you have a question about our projects, want to volunteer, or are interested in partnering with us, don&apos;t hesitate to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-4" />
                  <span>123 Eco Street, Green City, Earth 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-600 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-600 mr-4" />
                  <span>info@ConserveEasy.com</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Parallax
        bgImage="https://images.unsplash.com/photo-1640900149099-5e67d9c2b963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bnNldCUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
        strength={300}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold mb-12 text-center">Join Our Newsletter</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center mb-8">
              Stay up to date with our latest projects, events, and environmental news. Subscribe to our newsletter for regular updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Parallax>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { question: "How can I get involved?", answer: "There are many ways to get involved with ConserveEasy. You can volunteer for our projects, donate to support our initiatives, or spread awareness about environmental conservation in your community." },
              { question: "Where do my donations go?", answer: "Your donations directly support our conservation projects, educational programs, and operational costs. We ensure that the majority of funds go directly to our environmental initiatives." },
              { question: "Do you offer internships or job opportunities?", answer: "Yes, we regularly offer internships and job opportunities for passionate individuals who want to make a difference. Check our careers page for current openings." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage