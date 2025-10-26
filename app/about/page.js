'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './about.module.css'

// Navigation Component (same as other pages)
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

export default function About() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [sparkles, setSparkles] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const accordionData = [
    {
      id: 1,
      title: "What I Do",
      content: "I focus mainly on backend development, where I primarily use PHP to build reliable and scalable systems. Alongside backend work, I also explore web development, video editing, and creative problem-solving. My current role in school projects has sharpened my skills in building real-world applications while continuously improving my knowledge in IT.",
      skills: ["PHP", "Backend Development", "System Architecture", "Problem Solving"]
    },
    {
      id: 2,
      title: "Passion",
      content: "I do what I do because I truly enjoy solving problems through technology. I love the process of thinking through challenges, designing solutions, and seeing ideas come to life. My mission is to grow as a developer while creating meaningful digital tools that make people's lives easier."
    },
    {
      id: 3,
      title: "Achievements",
      content: "",
      achievements: [
        "Built an appointment management system that streamlined scheduling processes.",
        "Developed a study source platform to support student learning.",
        "Created an expense tracker system to help users manage their finances better.",
        "Gained strong experience in backend logic and system development as the primary backend developer in group projects."
      ]
    },
    {
      id: 4,
      title: "Get to know me more",
      content: "Outside of tech, I enjoy movies — my comfort movie is the Harry Potter series. It's so magical and I just love it."
    }
  ]

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  const createSparkle = () => {
    const newSparkle = {
      id: Date.now(),
      style: {
        '--tx': `${(Math.random() * 60 - 30)}px`,
        '--ty': `${(Math.random() * 40 - 20)}px`
      }
    }
    
    setSparkles(prev => [...prev, newSparkle])
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id))
    }, 1000)
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
            <span className={styles.titleHighlight}>About</span>{' '}
            <span className={styles.titleAccent}>Me</span>
          </h1>
          <p className={`${styles.introText} ${textStyles.secondary}`}>
            I'm Eunice Gardner, currently pursuing a Bachelor of Science in Information Technology at Gordon College. 
            I've worked on a variety of projects such as an appointment management system, a study source platform, 
            and an expense tracker system, among others.
          </p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className={styles.accordionContainer}>
        {accordionData.map((item) => (
          <div key={item.id} className={`${styles.accordionItem} ${
            darkMode ? styles.darkAccordionItem : ''
          }`}>
            <button
              className={`${styles.accordionHeader} ${
                darkMode ? styles.darkAccordionHeader : ''
              }`}
              onClick={() => toggleAccordion(item.id)}
            >
              <span className={textStyles.primary}>{item.title}</span>
              <span className={`${styles.accordionIcon} ${
                activeAccordion === item.id ? styles.accordionIconOpen : ''
              } ${darkMode ? styles.darkAccordionIcon : ''}`}>
                ▼
              </span>
            </button>
            
            <div className={`${styles.accordionContent} ${
              activeAccordion === item.id ? styles.accordionContentOpen : ''
            } ${darkMode ? styles.darkAccordionContent : ''}`}>
              <div className={styles.accordionBody}>
                {item.content && <p className={textStyles.secondary}>{item.content}</p>}
                
                {item.skills && (
                  <div className={styles.skillsContainer}>
                    {item.skills.map((skill, index) => (
                      <span key={index} className={`${styles.skillTag} ${
                        darkMode ? styles.darkSkillTag : ''
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                
                {item.achievements && (
                  <div className={`${styles.achievementHighlight} ${
                    darkMode ? styles.darkAchievementHighlight : ''
                  }`}>
                    <ul>
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className={textStyles.secondary}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.id === 4 && (
                  <div className={styles.wandContainer}>
                    <span 
                      className={styles.wandEmoji}
                      onClick={createSparkle}
                      title="Cast a spell!"
                    >
                      🪄
                    </span>
                    <div className={styles.sparkleContainer}>
                      {sparkles.map(sparkle => (
                        <span
                          key={sparkle.id}
                          className={styles.sparkle}
                          style={sparkle.style}
                        >
                          ✨
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}