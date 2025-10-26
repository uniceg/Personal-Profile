'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './projects.module.css'

// Navigation Component (same as profile)
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
      <nav className={`hidden md:flex fixed top-0 w-full shadow-lg z-50 ${styles.nav} ${
        darkMode ? styles.navDark : styles.navLight
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-pink-900'
            }`}>
              Eunice<span className={darkMode ? 'text-purple-300' : 'text-pink-700'}>.dev</span>
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
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className={`md:hidden fixed top-0 w-full shadow-lg z-50 ${styles.nav} ${
        darkMode ? styles.navDark : styles.navLight
      }`}>
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-pink-900'
            }`}>
              Eunice.dev
            </Link>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${styles.mobileNavButton} ${
                darkMode ? styles.mobileNavButtonDark : styles.mobileNavButtonLight
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
        ${styles.mobileSidebar} ${darkMode ? styles.mobileSidebarDark : styles.mobileSidebarLight}
      `}>
        {/* Sidebar Header */}
        <div className={`p-4 border-b ${
          darkMode ? 'border-purple-700' : 'border-pink-300'
        }`}>
          <div className={`font-bold text-lg ${
            darkMode ? 'text-purple-200' : 'text-pink-900'
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
              <span>{item.emoji}</span>
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const projects = [
    {
      id: 1,
      title: "EXPENSEWISE: KEEP TRACK OF YOUR EXPENSES",
      description: "ExpenseWise is a simple yet powerful expense tracking system that helps users manage their personal finances. It allows users to record daily expenses, categorize spending, and monitor budgets effectively. With clear summaries and reports, ExpenseWise promotes better money management and financial awareness.",
      image: "/images/ExpenseWise.jpg",
      placeholder: "💰",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "Daily expense tracking and categorization",
        "Budget monitoring and financial reports",
        "User-friendly interface for easy money management",
        "Secure data storage and privacy protection"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "GC DENTAL APPOINTMENT MANAGEMENT SYSTEM",
      description: "GC Dental is a web-based appointment and management system designed for a dental clinic. The project aims to simplify the scheduling process for patients while providing the clinic with an organized way to handle bookings, records, and services.",
      image: "/images/GCDENTAL.png",
      placeholder: "🦷",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      features: [
        "Online appointment scheduling for patients",
        "Clinic management and record keeping",
        "Automated reminders and notifications",
        "Service tracking and billing management"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "GCSTUDY: ACCESS E-BOOKS AND UPDATED WEBINARS",
      description: "GCStudy is a web-based academic platform designed for Gordon College students. It provides access to ebooks, digital resources, and webinars from different departments, creating a centralized hub for learning. The system helps students stay engaged, connected, and better prepared by offering easy access to study materials and knowledge-sharing opportunities.",
      image: "/images/gcstudy.jpg",
      placeholder: "📚",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      features: [
        "Centralized access to ebooks and study materials",
        "Updated webinars and learning resources",
        "Department-specific content organization",
        "Knowledge-sharing platform for students"
      ],
      demoLink: "#",
      codeLink: "#"
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const textStyles = darkMode 
    ? {
        primary: styles.darkTextPrimary,
        secondary: styles.darkTextSecondary,
        muted: styles.darkTextMuted
      }
    : {
        primary: styles.textPrimary,
        secondary: styles.textSecondary,
        muted: styles.textMuted
      }

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : styles.lightMode}`}>
      
      {/* Navigation Component */}
      <Navigation darkMode={darkMode} />
      
      {/* Dark Mode Toggle */}
      <div className={`${styles.darkModeToggle} ${
        darkMode ? styles.darkModeToggleDark : styles.darkModeToggleLight
      }`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-6 h-6 flex items-center justify-center"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Hero Section */}
      <div className={`${styles.heroSection} ${
        darkMode ? styles.darkHeroSection : ''
      }`}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} ${textStyles.primary}`}>
            <span className={styles.titleHighlight}>My</span>{' '}
            <span className={styles.titleAccent}>Projects</span>
          </h1>
          <p className={`${styles.subtitle} ${textStyles.secondary}`}>
            Explore my journey through code and creativity. Each project represents 
            a learning experience and a step forward in my development career.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`${styles.projectCard} ${
              darkMode ? styles.darkProjectCard : ''
            }`}
            onClick={() => openModal(project)}
          >
            <div className={`${styles.projectImage} ${
              darkMode ? styles.darkProjectImage : ''
            }`}>
              <img 
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className={`${styles.placeholderIcon} ${
                darkMode ? styles.darkPlaceholderIcon : ''
              }`}>
                {project.placeholder}
              </div>
            </div>
            
            <div className={styles.projectContent}>
              <h3 className={`${styles.projectTitle} ${textStyles.primary}`}>
                {project.title}
              </h3>
              <p className={`${styles.projectDescription} ${textStyles.secondary}`}>
                {project.description.substring(0, 150)}...
              </p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={`${styles.techTag} ${
                    darkMode ? styles.darkTechTag : ''
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                <button className={`${styles.projectLink} ${styles.primaryLink}`}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={`${styles.modalContent} ${
            darkMode ? styles.darkModalContent : ''
          }`} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.modalClose} ${
              darkMode ? styles.darkModalClose : ''
            }`} onClick={closeModal}>
              ×
            </button>
            
            <div className={`${styles.modalImage} ${
              darkMode ? styles.darkModalImage : ''
            }`}>
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className={styles.modalImage}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className={`${styles.placeholderIcon} ${
                darkMode ? styles.darkPlaceholderIcon : ''
              }`}>
                {selectedProject.placeholder}
              </div>
            </div>
            
            <div className={styles.modalBody}>
              <h2 className={`${styles.modalTitle} ${textStyles.primary}`}>
                {selectedProject.title}
              </h2>
              <p className={`${styles.modalDescription} ${textStyles.secondary}`}>
                {selectedProject.description}
              </p>
              
              <div className={styles.techStack}>
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className={`${styles.techTag} ${
                    darkMode ? styles.darkTechTag : ''
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={`${styles.featuresList} ${
                darkMode ? styles.darkFeaturesList : ''
              }`}>
                <h4 className={textStyles.primary}>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className={textStyles.secondary}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.projectLinks}>
                <a 
                  href={selectedProject.demoLink} 
                  className={`${styles.projectLink} ${styles.primaryLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={selectedProject.codeLink} 
                  className={`${styles.projectLink} ${styles.secondaryLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}