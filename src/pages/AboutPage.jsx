import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'

const AboutPage = () => {
    return (
        <div className="-mt-20">
            <Parallax
                bgImage="https://images.unsplash.com/photo-1688294399138-30ff7ad28dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG5hdHVyZSUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
                strength={500}
                className="h-[50vh] flex items-center justify-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold text-white text-center"
                >
                    About ConserveEasy
                </motion.h1>
            </Parallax>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-lg mb-4">
                                ConserveEasy was founded in 2010 with a simple mission: to protect and preserve our planet&apos;s natural resources for future generations. What started as a small group of passionate environmentalists has grown into a global movement.
                            </p>
                            <p className="text-lg">
                                Today, we work tirelessly across the globe, partnering with local communities, governments, and other organizations to implement sustainable practices and protect endangered ecosystems.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <img src="https://i.pinimg.com/enabled_hi/564x/9f/27/ff/9f27ff153d4ecccb9efe92e264411ca6.jpg" alt="ConserveEasy team" className="rounded-lg shadow-lg" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Parallax
                bgImage="https://plus.unsplash.com/premium_photo-1665311513770-ae77fdb90f51?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                strength={300}
                className="py-20"
            >
                <div className="container mx-auto px-4 text-white">
                    <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Sustainability', description: 'We believe in creating long-term, sustainable solutions that benefit both the environment and local communities.' },
                            { title: 'Education', description: 'Knowledge is power. We strive to educate and empower individuals to make environmentally conscious decisions.' },
                            { title: 'Innovation', description: 'We embrace new technologies and innovative approaches to solve complex environmental challenges.' },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-green-200 bg-opacity-50 backdrop-blur-md p-6 rounded-lg"
                            >
                                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Parallax>

            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <motion.div
                                key={member}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: member * 0.1 }}
                                className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
                            >
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROU5LBj19Js92GvB2iQ3UksLOa1OLODfIhUw&s`} alt={`Team Member ${member}`} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
                                    <p className="text-gray-600">Environmental Scientist</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
