'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Navigation Component (built-in)
function Navigation({ darkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/profile', label: 'Profile' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => pathname === path

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:flex fixed top-0 w-full shadow-lg z-50 ${
        darkMode 
          ? 'bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900' 
          : 'bg-gradient-to-r from-pink-200 to-pink-300'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-pink-800'
            }`}>
              Eunice<span className={darkMode ? 'text-purple-300' : 'text-pink-600'}>.dev</span>
            </Link>
            
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`font-semibold px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                    isActive(item.href)
                      ? darkMode
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-pink-500 text-white shadow-lg'
                      : darkMode
                        ? 'text-purple-200 hover:bg-purple-700 hover:text-white hover:scale-105'
                        : 'text-pink-700 hover:bg-pink-400 hover:text-white hover:scale-105'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className={`md:hidden fixed top-0 w-full shadow-lg z-50 ${
        darkMode 
          ? 'bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900' 
          : 'bg-gradient-to-r from-pink-200 to-pink-300'
      }`}>
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-pink-800'
            }`}>
              Eunice.dev
            </Link>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'text-purple-200 hover:bg-purple-700 hover:text-white' 
                  : 'text-pink-700 hover:bg-pink-400 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`
        md:hidden fixed top-0 right-0 h-full w-64 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        ${darkMode 
          ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900' 
          : 'bg-gradient-to-b from-pink-200 to-pink-300'
        }
      `}>
        {/* Sidebar Header */}
        <div className={`p-4 border-b ${
          darkMode ? 'border-purple-700' : 'border-pink-300'
        }`}>
          <div className={`font-bold text-lg ${
            darkMode ? 'text-purple-200' : 'text-pink-800'
          }`}>
            {darkMode ? '🌙 Menu' : '🌸 Menu'}
          </div>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-semibold
                ${
                  isActive(item.href)
                    ? darkMode
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-pink-500 text-white shadow-lg'
                    : darkMode
                      ? 'text-purple-200 hover:bg-purple-700 hover:text-white'
                      : 'text-pink-700 hover:bg-pink-400 hover:text-white'
                }
              `}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className={`absolute bottom-0 w-full p-4 border-t ${
          darkMode ? 'border-purple-700' : 'border-pink-300'
        }`}>
          <div className={`text-sm text-center ${
            darkMode ? 'text-purple-300' : 'text-pink-600'
          }`}>
            Eunice Gardner {darkMode ? '🌙' : '🌸'}
          </div>
        </div>
      </div>

      {/* Spacer for fixed navigation */}
      <div className="h-16 md:h-16"></div>
    </>
  )
}

export default function Home() {
  const [greeting, setGreeting] = useState({ text: '', emoji: '', bgClass: '', textColor: '' })
  const [darkMode, setDarkMode] = useState(false)

  // Dynamic greeting with theme colors - FIXED: Always include darkMode in dependencies
  useEffect(() => {
    const getGreetingData = () => {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) {
        return {
          text: "Good Morning",
          emoji: "🌞",
          bgClass: darkMode 
            ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"
            : "bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50",
          textColor: darkMode ? "text-purple-100" : "text-pink-700"
        }
      } else if (hour >= 12 && hour < 18) {
        return {
          text: "Good Afternoon", 
          emoji: "🌆",
          bgClass: darkMode
            ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
            : "bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50",
          textColor: darkMode ? "text-purple-100" : "text-pink-800"
        }
      } else {
        return {
          text: "Good Evening",
          emoji: "🌙", 
          bgClass: darkMode
            ? "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
            : "bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300",
          textColor: darkMode ? "text-purple-100" : "text-pink-900"
        }
      }
    }

    const updateGreeting = () => {
      setGreeting(getGreetingData())
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 60000)
    
    return () => clearInterval(interval)
  }, [darkMode]) // FIXED: Always include darkMode in the dependency array

  // Theme styles
  const darkModeStyles = darkMode 
    ? "bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    : ""

  const cardStyles = darkMode
    ? "bg-gray-800/80 backdrop-blur-sm border-purple-700 text-purple-100"
    : "bg-white/95 backdrop-blur-sm border-pink-200 text-pink-900"

  const textStyles = darkMode
    ? {
        primary: "text-white",
        secondary: "text-purple-200",
        muted: "text-purple-300",
        accent: "text-purple-400"
      }
    : {
        primary: "text-pink-900",
        secondary: "text-pink-700",
        muted: "text-pink-600",
        accent: "text-pink-500"
      }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkModeStyles} ${greeting.bgClass}`}>
      
      {/* Navigation Component (built-in) */}
      <Navigation darkMode={darkMode} />
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
            darkMode 
              ? 'bg-purple-800 border-purple-700 text-yellow-300 hover:bg-purple-700' 
              : 'bg-white/90 border-pink-300 text-pink-600 hover:bg-pink-100'
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            
            {/* Dynamic Greeting */}
            <div className={`text-2xl font-semibold mb-6 animate-pulse ${greeting.textColor}`}>
              {greeting.text} {greeting.emoji}
            </div>

            {/* Main Title */}
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${textStyles.primary}`}>
              Welcome to My{' '}
              <span className={`bg-clip-text text-transparent ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400'
                  : 'bg-gradient-to-r from-pink-400 to-pink-600'
              }`}>
                Digital
              </span>{' '}
              Space
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium ${textStyles.secondary}`}>
              {darkMode ? '💻 IT Student • 🌟 Creative Developer • 🚀 Problem Solver' : '🎀 IT Student • 💝 Creative Developer • 🎯 Problem Solver'}
            </p>

            {/* Quick Introduction */}
            <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${textStyles.muted}`}>
              I'm <span className={`font-semibold ${darkMode ? 'text-purple-400' : 'text-pink-500'}`}>Eunice Gardner</span>, a passionate 19-year-old IT student at Gordon College. 
              I love creating beautiful, functional solutions with a touch of creativity. 
              Let's build something magical together! ✨
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              
              {/* Profile Card */}
              <Link href="/profile" className="group">
                <div className={`h-full rounded-2xl p-6 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${cardStyles} ${
                  darkMode ? 'group-hover:border-purple-500' : 'group-hover:border-pink-400'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform ${
                    darkMode 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                      : 'bg-gradient-to-br from-pink-300 to-pink-400'
                  }`}>
                    <span className="text-2xl text-white">👩‍💻</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textStyles.primary}`}>My Profile</h3>
                  <p className={`mb-4 leading-relaxed ${textStyles.secondary}`}>
                    Get to know me, my skills, and my journey in technology and creative development.
                  </p>
                  <div className={`font-semibold group-hover:translate-x-2 transition-transform ${textStyles.accent}`}>
                    View Profile →
                  </div>
                </div>
              </Link>

              {/* Projects Card */}
              <Link href="/projects" className="group">
                <div className={`h-full rounded-2xl p-6 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${cardStyles} ${
                  darkMode ? 'group-hover:border-blue-400' : 'group-hover:border-pink-300'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform ${
                    darkMode 
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-500' 
                      : 'bg-gradient-to-br from-pink-400 to-pink-500'
                  }`}>
                    <span className="text-2xl text-white">🌟</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textStyles.primary}`}>My Projects</h3>
                  <p className={`mb-4 leading-relaxed ${textStyles.secondary}`}>
                    Explore my creative coding projects, web applications, and innovative solutions.
                  </p>
                  <div className={`font-semibold group-hover:translate-x-2 transition-transform ${
                    darkMode ? 'text-blue-400' : 'text-pink-500'
                  }`}>
                    View Projects →
                  </div>
                </div>
              </Link>

              {/* Contact Card */}
              <Link href="/contact" className="group">
                <div className={`h-full rounded-2xl p-6 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${cardStyles} ${
                  darkMode ? 'group-hover:border-purple-400' : 'group-hover:border-pink-400'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform ${
                    darkMode 
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-500' 
                      : 'bg-gradient-to-br from-pink-500 to-pink-600'
                  }`}>
                    <span className="text-2xl text-white">💌</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textStyles.primary}`}>Get In Touch</h3>
                  <p className={`mb-4 leading-relaxed ${textStyles.secondary}`}>
                    Ready to collaborate? Let's discuss your next project and create magic together!
                  </p>
                  <div className={`font-semibold group-hover:translate-x-2 transition-transform ${
                    darkMode ? 'text-purple-400' : 'text-pink-500'
                  }`}>
                    Contact Me →
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { number: "2+", label: "Years Experience", emoji: "📚" },
                { number: "10+", label: "Projects Completed", emoji: darkMode ? "🚀" : "💻" },
                { number: "IT", label: "Student Focus", emoji: "🎓" },
                { number: "PHP", label: "Backend Specialist", emoji: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl mb-2">{stat.emoji}</div>
                  <div className={`text-2xl md:text-3xl font-bold ${textStyles.primary} group-hover:${
                    darkMode ? 'text-purple-400' : 'text-pink-500'
                  } transition-colors`}>
                    {stat.number}
                  </div>
                  <div className={textStyles.muted}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <Link 
                href="/contact" 
                className={`inline-block text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
                    : 'bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600'
                }`}
              >
                {darkMode ? '🚀 Start a Project With Me' : '🎀 Start a Project With Me'}
              </Link>
              <div className={textStyles.muted}>
                or{' '}
                <Link href="/projects" className={`font-semibold underline decoration-2 underline-offset-4 transition-colors ${
                  darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-pink-500 hover:text-pink-400'
                }`}>
                  explore my work first
                </Link>
              </div>
            </div>

            {/* Social Links with Real Logos */}
            <div className="mt-12 flex justify-center space-x-6">
              {[
                { 
                  name: "GitHub", 
                  href: "https://github.com/uniceg", 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
                { 
                  name: "LinkedIn", 
                  href: "https://www.linkedin.com/in/eunice-gardner-99360b325/", 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                { 
                  name: "Facebook", 
                  href: "https://www.facebook.com/Euniceeeeeeeeeeeeee", 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl ${
                    darkMode
                      ? 'bg-purple-800 text-purple-200 hover:bg-purple-700 hover:text-white'
                      : 'bg-white/90 text-pink-600 hover:bg-pink-400 hover:text-white'
                  }`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                darkMode ? 'border-purple-400' : 'border-pink-400'
              }`}>
                <div className={`w-1 h-3 rounded-full mt-2 ${
                  darkMode ? 'bg-purple-400' : 'bg-pink-400'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 mt-20 backdrop-blur-sm border-t ${
        darkMode ? 'bg-gray-800/50 border-purple-700' : 'bg-white/60 border-pink-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={textStyles.muted}>
            &copy; 2025 Eunice Gardner. All rights reserved. | Gordon College IT Student 🎓
          </p>
          <p className={`mt-2 text-sm ${textStyles.muted}`}>
            Made with {darkMode ? '✨' : '💝'} and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  )
}