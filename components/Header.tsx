'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navigation = [
  { name: 'About us', href: '#about' },
  { 
    name: 'Insurance Plans', 
    href: '#services',
    dropdown: [
      'Affordable Care Act (ACA)',
      'Medicare',
      'Medicare Advantage',
      'Term Life Insurance',
      'Permanent Life Insurance',
      'Index Universal Life (IUL)',
      'Final Expense Insurance',
      'Commercial Insurance for Trucking',
      'Personal Auto Insurance',
      'Home & Property Insurance',
      'Supplemental Insurance'
    ]
  },
  { name: 'Get a free quote', href: '#quote' },
  // { name: 'Blog', href: '#blog' }, // Hidden temporarily
  { name: 'Join Unity', href: '#join' },
  { name: 'Contact', href: '#contact' },
  // { name: 'Payments', href: '#payments' }, // Removed
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2' 
          : 'bg-gradient-to-b from-white/90 to-transparent py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link href="/" className="relative">
            <Image
              src="/images/logo-main.svg"
              alt="Unity Financial Network"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 opacity-0 hover:opacity-20 rounded-lg transition-opacity"
              whileHover={{ opacity: 0.2 }}
            />
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors group">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="bg-gradient-to-br from-primary-50 to-purple-50 p-2">
                          {item.dropdown.map((plan, index) => (
                            <motion.a
                              key={plan}
                              href="#"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-all hover:translate-x-2"
                            >
                              {plan}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.a
            href="tel:7868285576"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            <Phone className="h-4 w-4 mr-1" />
            (7868285576
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary"
          >
            Free Consultation
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary-600" />
          ) : (
            <Menu className="h-6 w-6 text-primary-600" />
          )}
        </motion.button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="container-custom py-4 space-y-3">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border-b border-gray-100 pb-3"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdown.map((plan) => (
                        <a
                          key={plan}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                        >
                          {plan}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:7868285576"
                  className="flex items-center justify-center text-primary-600 font-semibold"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (7868285576
                </a>
                <button className="w-full button-primary">
                  Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}