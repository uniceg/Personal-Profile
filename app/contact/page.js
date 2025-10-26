'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './contact.module.css'

// Navigation Component (same as profile and projects)
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'Web Development'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const interests = [
    'Web Development',
    'Backend Development', 
    'PHP Projects',
    'System Architecture',
    'Collaboration',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestSelect = (interest) => {
    setFormData(prev => ({
      ...prev,
      interest
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all fields.')
      setIsSubmitting(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('Message sent successfully! Thank you for reaching out.')
      setFormData({
        name: '',
        email: '',
        message: '',
        interest: 'Web Development'
      })
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
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

      {/* Contact Section */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${textStyles.primary}`}>
              Let's discuss something <span className={styles.titleAccent}>amazing</span> together
            </h1>
            <p className={`text-xl ${textStyles.secondary} max-w-2xl mx-auto`}>
              Get in touch with me for collaborations, projects, or just to say hello!
            </p>
          </div>

          {/* Single Contact Box */}
          <div className={`${styles.contactBox} ${
            darkMode ? styles.darkContactBox : ''
          }`}>
            <div className={styles.contactBoxContent}>
              
              {/* Left Side - Contact Info */}
              <div className={styles.contactInfo}>
                <h2 className={`text-2xl font-bold mb-6 ${textStyles.primary}`}>
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className={styles.contactItem}>
                    <div className={`${styles.iconContainer} ${
                      darkMode ? styles.darkIconContainer : ''
                    }`}>
                      <span className="text-xl">📧</span>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm ${textStyles.muted}`}>Email</p>
                      <p className={`font-semibold ${textStyles.primary}`}>202311173@gordoncollege.edu.ph</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={`${styles.iconContainer} ${
                      darkMode ? styles.darkIconContainer : ''
                    }`}>
                      <span className="text-xl">📱</span>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm ${textStyles.muted}`}>Phone</p>
                      <p className={`font-semibold ${textStyles.primary}`}>099851420663</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={`${styles.iconContainer} ${
                      darkMode ? styles.darkIconContainer : ''
                    }`}>
                      <span className="text-xl">📍</span>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm ${textStyles.muted}`}>Location</p>
                      <p className={`font-semibold ${textStyles.primary}`}>Gordon College, Olongapo City</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className={`text-lg font-semibold mb-4 ${textStyles.primary}`}>Follow Me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${
                        darkMode ? styles.darkSocialIcon : ''
                      }`}
                    >
                      <span>f</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/eunice-gardner-99360b325/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${
                        darkMode ? styles.darkSocialIcon : ''
                      }`}
                    >
                      <span>in</span>
                    </a>
                    <a 
                      href="https://github.com/uniceg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.socialIcon} ${
                        darkMode ? styles.darkSocialIcon : ''
                      }`}
                    >
                      <span>⚡</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className={styles.contactForm}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Interest Selection */}
                  <div>
                    <label className={`block text-lg font-semibold mb-3 ${textStyles.primary}`}>
                      I'm interested in...
                    </label>
                    <div className={styles.interestGrid}>
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestSelect(interest)}
                          className={`${styles.interestButton} ${
                            formData.interest === interest 
                              ? styles.interestButtonSelected 
                              : `${styles.interestButtonDefault} ${
                                  darkMode ? styles.darkInterestButtonDefault : ''
                                }`
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${textStyles.muted}`}>
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`${styles.formInput} ${
                        darkMode ? styles.darkFormInput : ''
                      }`}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${textStyles.muted}`}>
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={`${styles.formInput} ${
                        darkMode ? styles.darkFormInput : ''
                      }`}
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${textStyles.muted}`}>
                      Your message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell me about your project or just say hello..."
                      className={`${styles.formInput} ${styles.formTextarea} ${
                        darkMode ? styles.darkFormInput : ''
                      }`}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.submitButton} ${
                      isSubmitting ? styles.submitButtonDisabled : styles.submitButtonEnabled
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className={styles.loadingSpinner}></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>📨</span>
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>

                  {/* Status Message */}
                  {submitStatus && (
                    <div className={`${styles.statusMessage} ${
                      submitStatus.includes('successfully') 
                        ? styles.statusSuccess 
                        : styles.statusError
                    }`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}