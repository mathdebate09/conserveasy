import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Home, Info, Briefcase, Mail } from 'lucide-react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const routes = [
    { path: '/', name: 'Home', icon: Home, component: HomePage },
    { path: '/about', name: 'About', icon: Info, component: AboutPage },
    { path: '/projects', name: 'Projects', icon: Briefcase, component: ProjectsPage },
    { path: '/contact', name: 'Contact', icon: Mail, component: ContactPage },
  ]

  return (
    <Router>
      <div className="min-h-screen bg-green-50 texxt-black">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-30 backdrop-blur-md text-black">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <Leaf className="w-8 h-8" />
              <span>ConserveEasy</span>
            </Link>
            <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 mt-4 lg:mt-0">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="flex items-center space-x-2 hover:text-green-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <route.icon className="w-5 h-5" />
                      <span>{route.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <route.component />
                    </motion.div>
                  }
                />
              ))}
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="visible md:invisible fixed bottom-0 left-0 right-0 z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-2 flex justify-around">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="flex flex-col items-center space-y-1 hover:text-green-900 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Optional: Close menu if needed
              >
                <route.icon className="w-6 h-6" />
                <span className="text-sm">{route.name}</span>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
