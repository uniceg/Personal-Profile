'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './profile.module.css'

// Navigation Component
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

export default function Profile() {
  const [activeTab, setActiveTab] = useState('about')
  const [darkMode, setDarkMode] = useState(false)

  const profileData = {
    personal: {
      name: "Eunice Gardner",
      title: "IT Student & Backend Developer",
      age: "19",
      location: "Gordon College, Olongapo City",
      email: "202311173@gordoncollege.edu.ph",
      phone: "099851420663"
    },
    
    about: `I'm a passionate 19-year-old IT student at Gordon College with a strong focus on backend development using PHP. 
    I enjoy creating efficient, scalable systems and solving complex problems through code. 
    My journey in technology started with curiosity and has evolved into a passion for building 
    meaningful digital solutions that make people's lives easier.`,

    skills: {
      technical: [
        "PHP",
        "MySQL", 
        "JavaScript",
        "HTML/CSS",
        "Bootstrap",
        "Git"
      ],
      soft: [
        "Problem Solving",
        "Team Collaboration",
        "Creative Thinking",
        "Time Management",
        "Attention to Detail",
        "Adaptability"
      ]
    },

    education: [
      {
        degree: "Bachelor of Science in Information Technology",
        school: "Gordon College",
        period: "2023 - Present",
        status: "Currently Enrolled"
      },
      {
        degree: "Senior High School - STEM",
        school: "Columban College",
        period: "2021 - 2023",
        status: "Completed"
      },
      {
        degree: "High School - BEP",
        school: "Olongapo City National High School",
        period: "2021",
        status: "Completed"
      }
    ],

    interests: [
      "Web Development",
      "System Architecture",
      "Database Design",
      "Video Editing",
      "UI/UX Design",
      "Creative Problem Solving",
      "Learning New Technologies"
    ],

    funFacts: [
      "🎬 My comfort movie series is Harry Potter",
      "🪄 I love anything magical and creative",
      "🌟 Passionate about creating user-friendly systems",
      "📚 Always learning new programming concepts",
      "🎨 Enjoy combining technical and creative skills",
      "💡 Love turning complex problems into simple solutions"
    ]
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className={`${styles.profileHeader} ${
          darkMode ? styles.darkProfileHeader : ''
        } p-8 mb-8`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture - Fixed path */}
            <div className={`${styles.profileImageContainer} ${
              darkMode ? styles.darkProfileImageContainer : ''
            }`}>
              <img 
                src="/images/gardner_photo.png"  // This should work if image is in public/images folder
                alt="Eunice Gardner"
                className={styles.profileImage}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback emoji if image doesn't load */}
              <div className={`${styles.profileImageFallback} ${
                darkMode ? styles.darkProfileImageFallback : ''
              }`}>
                <span className="text-6xl text-white">👩‍💻</span>
              </div>
            </div>
            
            {/* Personal Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${textStyles.primary}`}>
                {profileData.personal.name}
              </h1>
              <p className={`text-xl mb-4 ${textStyles.secondary}`}>{profileData.personal.title}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span>🎓</span>
                  <span className={textStyles.muted}>{profileData.personal.age} years old</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span className={textStyles.muted}>{profileData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span className={textStyles.muted}>{profileData.personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span className={textStyles.muted}>{profileData.personal.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {[
            { id: 'about', label: 'About Me', emoji: '💫' },
            { id: 'skills', label: 'Skills', emoji: '⚡' },
            { id: 'education', label: 'Education', emoji: '🎓' },
            { id: 'interests', label: 'Interests', emoji: '🌟' },
            { id: 'fun', label: 'Fun Facts', emoji: '🎨' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${
                activeTab === tab.id
                  ? styles.tabButtonActive
                  : `${styles.tabButtonInactive} ${
                      darkMode ? styles.darkTabButtonInactive : ''
                    }`
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`${styles.contentArea} ${
          darkMode ? styles.darkContentArea : ''
        } p-8`}>
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold mb-4 ${textStyles.primary}`}>About Me</h2>
              <p className={`text-lg leading-relaxed ${textStyles.secondary}`}>
                {profileData.about}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className={`${styles.educationCard} ${
                  darkMode ? styles.darkEducationCard : ''
                }`}>
                  <h3 className={`text-xl font-semibold mb-3 ${textStyles.primary}`}>🎯 My Mission</h3>
                  <p className={textStyles.secondary}>
                    To create innovative, user-friendly digital solutions that solve real-world problems 
                    while continuously learning and growing as a developer.
                  </p>
                </div>
                
                <div className={`${styles.educationCard} ${
                  darkMode ? styles.darkEducationCard : ''
                }`}>
                  <h3 className={`text-xl font-semibold mb-3 ${textStyles.primary}`}>💡 My Vision</h3>
                  <p className={textStyles.secondary}>
                    To become a skilled full-stack developer who contributes to meaningful projects 
                    and inspires other young women in technology.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab - Updated to remove percentages */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              <h2 className={`text-3xl font-bold mb-6 ${textStyles.primary}`}>Technical Skills</h2>
              
              <div className="flex flex-wrap gap-3">
                {profileData.skills.technical.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      darkMode 
                        ? 'bg-purple-900 text-purple-200 hover:bg-purple-800' 
                        : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className={`text-2xl font-bold mt-8 mb-4 ${textStyles.primary}`}>Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {profileData.skills.soft.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      darkMode 
                        ? 'bg-purple-900 text-purple-200 hover:bg-purple-800' 
                        : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold mb-6 ${textStyles.primary}`}>Education</h2>
              
              {profileData.education.map((edu, index) => (
                <div key={index} className={`${styles.educationCard} ${
                  darkMode ? styles.darkEducationCard : ''
                }`}>
                  <h3 className={`text-xl font-bold mb-2 ${textStyles.primary}`}>{edu.degree}</h3>
                  <p className={`font-semibold mb-1 ${textStyles.secondary}`}>{edu.school}</p>
                  <div className="flex justify-between items-center">
                    <span className={textStyles.muted}>{edu.period}</span>
                    <span className={`${styles.statusBadge} ${
                      edu.status === 'Currently Enrolled' 
                        ? `${styles.currentStatus} ${darkMode ? styles.darkCurrentStatus : ''}`
                        : `${styles.completedStatus} ${darkMode ? styles.darkCompletedStatus : ''}`
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}

              <div className={`${styles.educationCard} ${
                darkMode ? styles.darkEducationCard : ''
              } mt-8`}>
                <h3 className={`text-xl font-semibold mb-3 ${textStyles.primary}`}>🎯 Academic Focus</h3>
                <p className={textStyles.secondary}>
                  Currently specializing in backend development, database management, and system architecture. 
                  Actively participating in projects that enhance practical skills and theoretical knowledge.
                </p>
              </div>
            </div>
          )}

          {/* Interests Tab */}
          {activeTab === 'interests' && (
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold mb-6 ${textStyles.primary}`}>My Interests</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profileData.interests.map((interest, index) => (
                  <div 
                    key={index}
                    className={`${styles.interestCard} ${
                      darkMode ? styles.darkInterestCard : ''
                    }`}
                  >
                    <div className="text-3xl mb-3">{getInterestEmoji(interest)}</div>
                    <h3 className={`font-semibold ${textStyles.primary}`}>{interest}</h3>
                  </div>
                ))}
              </div>

              <div className={`${styles.educationCard} ${
                darkMode ? styles.darkEducationCard : ''
              } mt-8`}>
                <h3 className={`text-xl font-semibold mb-3 ${textStyles.primary}`}>🌟 Beyond Coding</h3>
                <p className={textStyles.secondary}>
                  When I'm not coding, I enjoy exploring creative outlets like video editing, 
                  learning about UI/UX design principles, and staying updated with the latest 
                  technology trends and innovations.
                </p>
              </div>
            </div>
          )}

          {/* Fun Facts Tab */}
          {activeTab === 'fun' && (
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold mb-6 ${textStyles.primary}`}>Fun Facts About Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profileData.funFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className={`${styles.funFactCard} ${
                      darkMode ? styles.darkFunFactCard : ''
                    }`}
                  >
                    <p className={textStyles.secondary}>{fact}</p>
                  </div>
                ))}
              </div>

              <div className={`${styles.ctaSection} ${
                darkMode ? styles.darkCtaSection : ''
              } mt-8`}>
                <h3 className="text-2xl font-bold text-white mb-3">Let's Create Something Amazing Together!</h3>
                <p className="text-pink-100 mb-4">
                  I'm always excited to take on new challenges and collaborate on interesting projects.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-100 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function for interest emojis
function getInterestEmoji(interest) {
  const emojiMap = {
    'Web Development': '🌐',
    'System Architecture': '🏗️',
    'Database Design': '🗃️',
    'Video Editing': '🎬',
    'UI/UX Design': '🎨',
    'Creative Problem Solving': '💡',
    'Learning New Technologies': '🚀'
  }
  return emojiMap[interest] || '🌟'
}