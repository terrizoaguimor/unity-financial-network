import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// Health Insurance Icon - Heart with Shield
export const HealthIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="health-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
      fill="url(#health-gradient)"
      opacity="0.9"
    />
    <path 
      d="M12 4.5v8m0 0l3-3m-3 3l-3-3" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
)

// Life Insurance Icon - Shield with Family
export const LifeIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="life-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M12 2L4 7v6c0 4.97 3.03 9.62 8 11 4.97-1.38 8-6.03 8-11V7l-8-5z" 
      fill="url(#life-gradient)"
    />
    <circle cx="12" cy="9" r="2" fill="white"/>
    <circle cx="8.5" cy="11" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="15.5" cy="11" r="1.5" fill="white" opacity="0.9"/>
    <path 
      d="M12 13c2 0 3.5 1 3.5 2.5v1h-7v-1c0-1.5 1.5-2.5 3.5-2.5z" 
      fill="white"
    />
    <path 
      d="M8.5 14c1.2 0 2 .5 2 1.2v.3h-4v-.3c0-.7.8-1.2 2-1.2zM15.5 14c1.2 0 2 .5 2 1.2v.3h-4v-.3c0-.7.8-1.2 2-1.2z" 
      fill="white"
      opacity="0.9"
    />
  </svg>
)

// Auto Insurance Icon - Car with Shield
export const AutoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="auto-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M5 11l1.5-4.5h11L19 11m-14 0h14m-14 0v7a1 1 0 001 1h1a1 1 0 001-1v-2m-3-5v5m14-5v7a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2m3-5v5" 
      stroke="url(#auto-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <rect x="6" y="12" width="3" height="3" rx="1.5" fill="url(#auto-gradient)"/>
    <rect x="15" y="12" width="3" height="3" rx="1.5" fill="url(#auto-gradient)"/>
    <path 
      d="M8 7.5h8l-.5 2h-7l-.5-2z" 
      fill="url(#auto-gradient)"
      opacity="0.3"
    />
  </svg>
)

// Home Insurance Icon - House with Shield
export const HomeIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="home-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M12 3L4 9v11a2 2 0 002 2h12a2 2 0 002-2V9l-8-6z" 
      fill="url(#home-gradient)"
      opacity="0.2"
    />
    <path 
      d="M12 3L4 9m8-6l8 6m-8-6v6m8 0v11a2 2 0 01-2 2h-12a2 2 0 01-2-2V9" 
      stroke="url(#home-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="9" y="13" width="6" height="7" fill="url(#home-gradient)" opacity="0.5"/>
    <circle cx="12" cy="11" r="2" fill="url(#home-gradient)"/>
  </svg>
)

// Medicare Icon - Medical Cross with Star
export const MedicareIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="medicare-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#medicare-gradient)" opacity="0.2"/>
    <path 
      d="M12 8v8m-4-4h8" 
      stroke="url(#medicare-gradient)" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M12 2l2.4 4.8L20 7.6l-4 3.9.9 5.5L12 14.4 7.1 17l.9-5.5-4-3.9 5.6-.8L12 2z" 
      fill="url(#medicare-gradient)"
      opacity="0.5"
    />
  </svg>
)

// Commercial/Trucking Icon
export const CommercialIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="commercial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="2" y="7" width="13" height="10" rx="1" fill="url(#commercial-gradient)" opacity="0.3"/>
    <path 
      d="M15 8h4l3 3v6h-7V8z" 
      fill="url(#commercial-gradient)" 
      opacity="0.5"
    />
    <circle cx="6" cy="18" r="2" fill="url(#commercial-gradient)"/>
    <circle cx="18" cy="18" r="2" fill="url(#commercial-gradient)"/>
    <path 
      d="M2 7h13v10M15 8h4l3 3v6M8 17h8" 
      stroke="url(#commercial-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Quote/Calculator Icon
export const QuoteIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="quote-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="4" y="2" width="16" height="20" rx="2" fill="url(#quote-gradient)" opacity="0.2"/>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="url(#quote-gradient)" strokeWidth="2"/>
    <circle cx="8" cy="7" r="1" fill="url(#quote-gradient)"/>
    <circle cx="12" cy="7" r="1" fill="url(#quote-gradient)"/>
    <circle cx="16" cy="7" r="1" fill="url(#quote-gradient)"/>
    <circle cx="8" cy="11" r="1" fill="url(#quote-gradient)"/>
    <circle cx="12" cy="11" r="1" fill="url(#quote-gradient)"/>
    <circle cx="16" cy="11" r="1" fill="url(#quote-gradient)"/>
    <rect x="7" y="15" width="10" height="3" rx="1" fill="url(#quote-gradient)"/>
  </svg>
)

// Contact/Phone Icon
export const ContactIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" 
      fill="url(#contact-gradient)"
      opacity="0.9"
    />
    <circle cx="17" cy="7" r="4" fill="white" opacity="0.9"/>
    <path d="M15 7h4m-2-2v4" stroke="url(#contact-gradient)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Payment/Credit Card Icon
export const PaymentIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="payment-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="url(#payment-gradient)" opacity="0.2"/>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#payment-gradient)" strokeWidth="2"/>
    <rect x="3" y="9" width="18" height="3" fill="url(#payment-gradient)"/>
    <rect x="6" y="14" width="4" height="2" rx="0.5" fill="url(#payment-gradient)"/>
    <rect x="12" y="14" width="6" height="2" rx="0.5" fill="url(#payment-gradient)"/>
  </svg>
)

// Join/Team Icon
export const TeamIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="team-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="3" fill="url(#team-gradient)"/>
    <path d="M12 14c3.3 0 6 1.3 6 3v2H6v-2c0-1.7 2.7-3 6-3z" fill="url(#team-gradient)" opacity="0.7"/>
    <circle cx="5" cy="9" r="2.5" fill="url(#team-gradient)" opacity="0.6"/>
    <path d="M5 14c-2 0-3.5.8-3.5 2v1.5h5V16c0-.8-.5-1.5-1.5-2z" fill="url(#team-gradient)" opacity="0.5"/>
    <circle cx="19" cy="9" r="2.5" fill="url(#team-gradient)" opacity="0.6"/>
    <path d="M19 14c2 0 3.5.8 3.5 2v1.5h-5V16c0-.8.5-1.5 1.5-2z" fill="url(#team-gradient)" opacity="0.5"/>
  </svg>
)

// Blog/News Icon
export const BlogIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="blog-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="4" y="3" width="16" height="18" rx="2" fill="url(#blog-gradient)" opacity="0.2"/>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="url(#blog-gradient)" strokeWidth="2"/>
    <line x1="8" y1="7" x2="16" y2="7" stroke="url(#blog-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="11" x2="16" y2="11" stroke="url(#blog-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="15" x2="13" y2="15" stroke="url(#blog-gradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Success/Check Icon
export const SuccessIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="success-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#success-gradient)" opacity="0.2"/>
    <circle cx="12" cy="12" r="10" stroke="url(#success-gradient)" strokeWidth="2"/>
    <path 
      d="M8 12l3 3 5-6" 
      stroke="url(#success-gradient)" 
      strokeWidth="3" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Arrow Right Icon
export const ArrowRightIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#arrow-gradient)" opacity="0.1"/>
    <path 
      d="M10 8l4 4-4 4" 
      stroke="url(#arrow-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Star Rating Icon
export const StarIcon = ({ className = "", size = 24, filled = false }: IconProps & { filled?: boolean }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      fill={filled ? "url(#star-gradient)" : "none"}
      stroke="url(#star-gradient)"
      strokeWidth={filled ? "0" : "2"}
      strokeLinejoin="round"
      opacity={filled ? "1" : "0.5"}
    />
  </svg>
)

// Email Icon
export const EmailIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="email-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="url(#email-gradient)" opacity="0.2"/>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#email-gradient)" strokeWidth="2"/>
    <path 
      d="M3 7l9 5 9-5" 
      stroke="url(#email-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

// Location/Map Icon
export const LocationIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
      fill="url(#location-gradient)"
      opacity="0.3"
    />
    <path 
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
      stroke="url(#location-gradient)"
      strokeWidth="2"
    />
    <circle cx="12" cy="9" r="2.5" fill="url(#location-gradient)"/>
  </svg>
)

// Menu/Hamburger Icon
export const MenuIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="menu-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="3" y="6" width="18" height="2" rx="1" fill="url(#menu-gradient)"/>
    <rect x="3" y="11" width="18" height="2" rx="1" fill="url(#menu-gradient)"/>
    <rect x="3" y="16" width="18" height="2" rx="1" fill="url(#menu-gradient)"/>
  </svg>
)

// Close/X Icon
export const CloseIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="close-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#close-gradient)" opacity="0.1"/>
    <path 
      d="M8 8l8 8m0-8l-8 8" 
      stroke="url(#close-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

// Language/Globe Icon
export const LanguageIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="language-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#language-gradient)" strokeWidth="2" fill="none"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="url(#language-gradient)" strokeWidth="1.5" fill="none"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="url(#language-gradient)" strokeWidth="1.5"/>
    <line x1="12" y1="2" x2="12" y2="22" stroke="url(#language-gradient)" strokeWidth="1.5"/>
  </svg>
)

// Download Icon
export const DownloadIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="download-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="3" y="17" width="18" height="4" rx="1" fill="url(#download-gradient)" opacity="0.3"/>
    <path 
      d="M12 3v12m0 0l-4-4m4 4l4-4" 
      stroke="url(#download-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="3" y1="21" x2="21" y2="21" stroke="url(#download-gradient)" strokeWidth="2"/>
  </svg>
)

// Checkmark Icon
export const CheckIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M5 13l4 4L19 7" 
      stroke="url(#check-gradient)" 
      strokeWidth="3" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Shield Icon
export const ShieldIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M12 2L4 7v6c0 4.97 3.03 9.62 8 11 4.97-1.38 8-6.03 8-11V7l-8-5z" 
      fill="url(#shield-gradient)"
      opacity="0.9"
    />
    <path 
      d="M9 12l2 2 4-4" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Info Icon
export const InfoIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="info-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#info-gradient)" strokeWidth="2"/>
    <line x1="12" y1="16" x2="12" y2="12" stroke="url(#info-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="1" fill="url(#info-gradient)"/>
  </svg>
)

// Clock Icon
export const ClockIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="clock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#clock-gradient)" strokeWidth="2" fill="none"/>
    <path 
      d="M12 6v6l4 2" 
      stroke="url(#clock-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

// Calendar Icon
export const CalendarIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="calendar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="url(#calendar-gradient)" strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="url(#calendar-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="url(#calendar-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="url(#calendar-gradient)" strokeWidth="2"/>
    <rect x="6" y="14" width="3" height="3" fill="url(#calendar-gradient)" rx="0.5"/>
    <rect x="11" y="14" width="3" height="3" fill="url(#calendar-gradient)" rx="0.5"/>
    <rect x="16" y="14" width="3" height="3" fill="url(#calendar-gradient)" rx="0.5"/>
  </svg>
)

// User Icon
export const UserIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="user-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="4" fill="url(#user-gradient)"/>
    <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6v1H4v-1z" fill="url(#user-gradient)" opacity="0.8"/>
  </svg>
)

// Settings Icon
export const SettingsIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="settings-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="3" stroke="url(#settings-gradient)" strokeWidth="2"/>
    <path 
      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" 
      stroke="url(#settings-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

// Search Icon
export const SearchIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="search-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="11" cy="11" r="8" stroke="url(#search-gradient)" strokeWidth="2"/>
    <path d="M21 21l-4.35-4.35" stroke="url(#search-gradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Dollar Icon
export const DollarIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="dollar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#dollar-gradient)" strokeWidth="2"/>
    <path 
      d="M12 6v12M9 9h6c.8 0 1.5.7 1.5 1.5S15.8 12 15 12H9c-.8 0-1.5.7-1.5 1.5S8.2 15 9 15h6" 
      stroke="url(#dollar-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

// Chat Icon
export const ChatIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="chat-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path 
      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" 
      fill="url(#chat-gradient)"
      opacity="0.9"
    />
    <circle cx="9" cy="11" r="1" fill="white"/>
    <circle cx="12" cy="11" r="1" fill="white"/>
    <circle cx="15" cy="11" r="1" fill="white"/>
  </svg>
)

// Briefcase Icon
export const BriefcaseIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="briefcase-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="url(#briefcase-gradient)" strokeWidth="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="url(#briefcase-gradient)" strokeWidth="2"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="url(#briefcase-gradient)" strokeWidth="2"/>
    <rect x="10" y="11" width="4" height="2" fill="url(#briefcase-gradient)"/>
  </svg>
)

// Award Icon
export const AwardIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="award-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#522784" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="6" fill="url(#award-gradient)"/>
    <path d="M12 2l1.5 3 3.5.5-2.5 2.5.5 3.5L12 10l-3 1.5.5-3.5L7 5.5 10.5 5 12 2z" fill="white" opacity="0.9"/>
    <path d="M8.5 13l-1 9 4.5-2 4.5 2-1-9" stroke="url(#award-gradient)" strokeWidth="2" fill="none"/>
  </svg>
)