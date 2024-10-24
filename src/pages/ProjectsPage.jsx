import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  const projects = [
    { title: 'Reforestation Initiative', image: 'https://plus.unsplash.com/premium_photo-1663951812819-2f545e702cf0?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Planting millions of trees to combat deforestation and climate change.' },
    { title: 'Ocean Cleanup', image: 'https://images.unsplash.com/photo-1494879540385-bc170b0878a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE9jZWFufGVufDB8fDB8fHww', description: 'Removing plastic waste from our oceans and promoting sustainable fishing practices.' },
    { title: 'Renewable Energy Transition', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVuZXdhYmxlJTIwbmVyZ3l8ZW58MHx8MHx8fDA%3D', description: 'Supporting communities in transitioning to clean, renewable energy sources.' },
    { title: 'Wildlife Conservation', image: 'https://plus.unsplash.com/premium_photo-1661961289299-b80fa2b2cf91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGxpZmUlMjBjb25zZXJ2YXRpb258ZW58MHx8MHx8fDA%3D', description: 'Protecting endangered species and preserving biodiversity hotspots.' },
  ]

  return (
    <div className="-mt-20">
      <Parallax
        bgImage="https://plus.unsplash.com/premium_photo-1671976322611-eba16e80e881?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        strength={500}
        className="h-[60vh] flex items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white text-center"
        >
          Our Projects
        </motion.h1>
      </Parallax>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-green-50 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="#"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Parallax
        bgImage="https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcmVzdCUyMG5hdHVyZSUyMGRhcmt8ZW58MHx8MHx8fDA%3D"
        strength={300}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold mb-12 text-center">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Volunteer', description: 'Join our global network of volunteers and make a direct impact on our projects.' },
              { title: 'Donate', description: 'Support our initiatives financially. Every contribution helps us expand our reach.' },
              { title: 'Spread the Word', description: 'Share our mission with your network and help raise awareness for environmental conservation.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-green-200 bg-opacity-25 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <Link
                  to="#"
                  className="inline-block bg-white text-green-800 font-bold py-2 px-4 rounded hover:bg-green-100 transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Project Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300"></div>
            {[2020, 2021, 2022, 2023].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="absolute top-6 -left-3 w-6 h-6 bg-green-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-2">{year}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage