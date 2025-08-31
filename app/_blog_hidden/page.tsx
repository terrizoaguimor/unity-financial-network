/**
 * @fileoverview Blog page component for Unity Financial Network
 * 
 * This page provides a comprehensive blog interface featuring:
 * - Featured articles with prominent display
 * - Interactive article catalog with search and filtering
 * - Category-based organization and sidebar navigation
 * - Social interaction features (save, share, comments)
 * - Newsletter subscription integration
 * - Responsive design with smooth animations
 * - Bilingual content support (English/Spanish)
 * 
 * Features:
 * - Real-time search across articles, excerpts, and tags
 * - Category filtering with post counts
 * - Featured article highlighting system
 * - Bookmark functionality for saving articles
 * - Popular tags for quick filtering
 * - Newsletter subscription widget
 * - Social sharing and comment indicators
 * - Pagination for large article sets
 * 
 * @module BlogPage
 * @requires react
 * @requires @/contexts/LanguageContext
 * @requires framer-motion
 * @requires lucide-react
 * @requires next/image
 * 
 * @author Unity Financial Network Development Team
 * @version 1.0.0
 * @since 2025-08-19
 */

'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, Clock, User, Tag, Search, Filter, 
  TrendingUp, Heart, Shield, DollarSign, ArrowRight,
  BookOpen, MessageCircle, Share2, Bookmark
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import Image from 'next/image'

/**
 * Blog post data structure
 * @typedef {Object} BlogPost
 * @property {number} id - Unique post identifier
 * @property {string} title - Article title
 * @property {string} excerpt - Brief article summary
 * @property {string} category - Post category (Health Insurance, Life Insurance, etc.)
 * @property {string} author - Author name
 * @property {string} date - Publication date (YYYY-MM-DD)
 * @property {string} readTime - Estimated reading time
 * @property {string} image - Hero image URL
 * @property {string[]} tags - Article tags for filtering
 * @property {boolean} featured - Whether post is featured
 * @property {number} comments - Number of comments
 */

/**
 * Static blog post data - In production, this would come from a CMS or API
 * Contains sample insurance-related articles covering various topics
 */
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Medicare Advantage Plans: A Complete Guide',
    excerpt: 'Learn everything you need to know about Medicare Advantage plans, including coverage options, costs, and how to choose the right plan for your needs.',
    category: 'Medicare',
    author: 'Dr. Sarah Martinez',
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['Medicare', 'Health Insurance', 'Senior Care'],
    featured: true,
    comments: 23
  },
  {
    id: 2,
    title: '5 Reasons Why Young Adults Need Life Insurance',
    excerpt: 'Think you\'re too young for life insurance? Think again. Discover why getting life insurance in your 20s and 30s could be one of your smartest financial moves.',
    category: 'Life Insurance',
    author: 'Michael Johnson',
    date: '2024-03-12',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80',
    tags: ['Life Insurance', 'Financial Planning', 'Young Adults'],
    featured: false,
    comments: 15
  },
  {
    id: 3,
    title: 'How to Save Money on Your Auto Insurance Premium',
    excerpt: 'Discover proven strategies to reduce your auto insurance costs without sacrificing coverage. From discounts to coverage adjustments, we cover it all.',
    category: 'Auto Insurance',
    author: 'David Chen',
    date: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    tags: ['Auto Insurance', 'Money Saving', 'Tips'],
    featured: false,
    comments: 18
  },
  {
    id: 4,
    title: 'The Ultimate Guide to ACA Health Insurance',
    excerpt: 'Navigate the Affordable Care Act with confidence. Learn about subsidies, enrollment periods, and how to find the best plan for your family.',
    category: 'Health Insurance',
    author: 'Maria Rodriguez',
    date: '2024-03-08',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    tags: ['ACA', 'Health Insurance', 'Healthcare'],
    featured: true,
    comments: 32
  },
  {
    id: 5,
    title: 'Index Universal Life Insurance: Is It Right for You?',
    excerpt: 'Explore the benefits and considerations of IUL insurance. Learn how it combines life protection with investment potential.',
    category: 'Life Insurance',
    author: 'John Williams',
    date: '2024-03-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    tags: ['IUL', 'Life Insurance', 'Investment'],
    featured: false,
    comments: 12
  },
  {
    id: 6,
    title: 'Protecting Your Home: A Homeowner\'s Insurance Checklist',
    excerpt: 'Ensure your home is properly protected with our comprehensive homeowner\'s insurance checklist. Don\'t miss these critical coverage areas.',
    category: 'Home Insurance',
    author: 'Emily Davis',
    date: '2024-03-03',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    tags: ['Home Insurance', 'Property', 'Protection'],
    featured: false,
    comments: 9
  },
  {
    id: 7,
    title: 'Small Business Insurance: What Every Entrepreneur Needs',
    excerpt: 'Starting a business? Make sure you have the right insurance coverage. From liability to property, we cover all the essentials.',
    category: 'Commercial',
    author: 'Robert Taylor',
    date: '2024-02-28',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    tags: ['Business', 'Commercial', 'Entrepreneur'],
    featured: false,
    comments: 21
  },
  {
    id: 8,
    title: 'Understanding Your Health Insurance Deductible',
    excerpt: 'Confused about deductibles? Learn how they work, when you pay them, and how to choose the right deductible for your budget.',
    category: 'Health Insurance',
    author: 'Dr. Lisa Anderson',
    date: '2024-02-25',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    tags: ['Health Insurance', 'Healthcare Costs', 'Education'],
    featured: false,
    comments: 14
  }
]

/**
 * Blog category data structure
 * @typedef {Object} BlogCategory
 * @property {string} name - Category display name
 * @property {number} count - Number of posts in category
 * @property {React.ComponentType} icon - Lucide React icon component
 */

/**
 * Blog categories for filtering with post counts
 * Static data - in production would be dynamically calculated
 */
const categories = [
  { name: 'All Posts', count: blogPosts.length, icon: BookOpen },
  { name: 'Health Insurance', count: 3, icon: Heart },
  { name: 'Life Insurance', count: 2, icon: Shield },
  { name: 'Auto Insurance', count: 1, icon: DollarSign },
  { name: 'Medicare', count: 1, icon: TrendingUp },
  { name: 'Home Insurance', count: 1, icon: Heart }
]

/**
 * Blog Page Component
 * 
 * Main blog interface featuring article catalog, search, filtering, and
 * social features. Provides comprehensive blog reading experience with
 * category organization and interactive elements.
 * 
 * @component BlogPage
 * @returns {JSX.Element} Complete blog page with hero, featured article, sidebar, and grid
 * 
 * State Management:
 * - selectedCategory: Currently active category filter
 * - searchTerm: User search input for filtering articles
 * - savedPosts: Array of bookmarked post IDs
 * 
 * Features:
 * - Featured article with prominent display
 * - Real-time search across multiple fields (title, excerpt, tags)
 * - Category filtering with visual indicators
 * - Article bookmarking/saving functionality
 * - Newsletter subscription widget
 * - Social sharing and engagement metrics
 * - Responsive grid layout with animations
 * 
 * @example
 * ```tsx
 * // Rendered automatically at /blog route
 * <BlogPage />
 * ```
 * 
 * @see {@link HeaderSimple} For navigation
 * @see {@link Footer} For page footer
 */
export default function BlogPage() {
  // Get current language for bilingual content
  const { language } = useLanguage()
  
  // State for category filtering - tracks selected category
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  
  // State for search functionality - tracks user input
  const [searchTerm, setSearchTerm] = useState('')
  
  // State for saved/bookmarked posts - tracks user's saved articles
  const [savedPosts, setSavedPosts] = useState<number[]>([])

  /**
   * Filter posts based on category and search criteria
   * Searches across title, excerpt, and tags for comprehensive matching
   */
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Find the featured post for prominent display
  const featuredPost = blogPosts.find(post => post.featured)
  
  // Get recent posts for sidebar (unused in current implementation)
  const recentPosts = blogPosts.slice(0, 3)

  /**
   * Toggle bookmark/save status for a blog post
   * Manages user's saved articles list in local state
   * 
   * @param {number} postId - ID of the post to toggle
   */
  const toggleSavePost = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80" 
            alt="Blog and insights"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/90 via-purple-50/90 to-white/90" />
        </div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-700 mb-4"
          >
            {language === 'en' ? 'Unity Blog' : 'Blog de Unity'}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {language === 'en' ? 'Insurance Insights &' : 'Perspectivas de Seguros y'}{' '}
            <span className="gradient-text">{language === 'en' ? 'Expert Advice' : 'Consejos de Expertos'}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            {language === 'en' 
              ? 'Stay informed with the latest insurance news, tips, and comprehensive guides to help you make better financial decisions.'
              : 'Manténte informado con las últimas noticias de seguros, consejos y guías completas para ayudarte a tomar mejores decisiones financieras.'}
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search articles...' : 'Buscar artículos...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all text-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="h-80 bg-gradient-to-br from-primary-200 to-purple-200 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-white/50" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full w-fit mb-4">
                    {language === 'en' ? 'Featured Article' : 'Artículo Destacado'}
                  </span>
                  
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary-600 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all w-fit flex items-center gap-2"
                  >
                    {language === 'en' ? 'Read Full Article' : 'Leer Artículo Completo'}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary-600" />
                    {language === 'en' ? 'Categories' : 'Categorías'}
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const Icon = category.icon
                      return (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                            selectedCategory === category.name
                              ? 'bg-primary-100 text-primary-700'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {category.name}
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary-600" />
                    {language === 'en' ? 'Popular Tags' : 'Etiquetas Populares'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Medicare', 'Life Insurance', 'Health Insurance', 'Auto', 'Tips', 'Savings'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        className="px-3 py-1 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 rounded-full text-sm transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-primary-600 to-purple-700 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{language === 'en' ? 'Stay Updated' : 'Manténte Actualizado'}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    {language === 'en' 
                      ? 'Get the latest insurance tips delivered to your inbox.'
                      : 'Recibe los últimos consejos de seguros en tu bandeja de entrada.'}
                  </p>
                  <input
                    type="email"
                    placeholder={language === 'en' ? 'Your email' : 'Tu correo electrónico'}
                    className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3"
                  />
                  <button className="w-full px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                    {language === 'en' ? 'Subscribe' : 'Suscribirse'}
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleSavePost(post.id)}
                            className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                          >
                            <Bookmark 
                              className={`w-4 h-4 ${
                                savedPosts.includes(post.id) 
                                  ? 'fill-primary-600 text-primary-600' 
                                  : 'text-gray-600'
                              }`} 
                            />
                          </motion.button>
                        </div>
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors cursor-pointer line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 text-sm text-gray-500">
                              <MessageCircle className="w-4 h-4" />
                              {post.comments}
                            </span>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                              <Share2 className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1"
                          >
                            {language === 'en' ? 'Read More' : 'Leer Más'}
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">{language === 'en' ? 'No articles found' : 'No se encontraron artículos'}</h3>
                  <p className="text-gray-500">{language === 'en' ? 'Try adjusting your search or filter criteria' : 'Intenta ajustar tu búsqueda o criterios de filtro'}</p>
                </motion.div>
              )}

              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center gap-2 mt-12"
                >
                  <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                    {language === 'en' ? 'Previous' : 'Anterior'}
                  </button>
                  {[1, 2, 3, 4, 5].map(page => (
                    <button
                      key={page}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        page === 1
                          ? 'bg-primary-600 text-white'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                    {language === 'en' ? 'Next' : 'Siguiente'}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}