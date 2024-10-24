import React from 'react'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Parallax
        bgImage="https://plus.unsplash.com/premium_photo-1663950774999-8da6f0553d8c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        strength={500}
        className="h-screen object-fit -mt-20 flex items-center justify-center"
        bgImageStyle={{ backgroundSize: 'cover' }}
      >
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Protect Our Planet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8"
          >
            Join us in the fight against climate change
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              to="/projects"
              className="bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-20 hover:bg-opacity-50 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
              <ArrowRight className="ml-2 animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </Parallax>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Preserve', 'Educate', 'Innovate'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-green-100 p-6 rounded-lg text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Parallax
        bgImage="https://images.unsplash.com/photo-1688294399138-30ff7ad28dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG5hdHVyZSUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
        strength={300}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Impact Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1M+', label: 'Trees Planted' },
              { number: '500K', label: 'Volunteers' },
              { number: '100+', label: 'Species Protected' },
              { number: '50+', label: 'Countries Reached' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hlRRGMTdPS9Zgyk1J7BN4uqi6l54xBlkjA&s" alt="News" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Environmental News Title</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link to="#" class Name="text-green-600 hover:text-green-800 font-semibold">
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
