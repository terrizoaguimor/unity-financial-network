/**
 * @fileoverview Optimized icon exports to reduce bundle size
 * 
 * This module re-exports only the icons we actually use throughout the application.
 * This helps with tree-shaking and reduces the final bundle size by avoiding
 * importing unused icons from the entire lucide-react library.
 * 
 * Usage: Import icons from this file instead of directly from lucide-react
 * Example: import { Phone, Mail } from '@/components/OptimizedIcons'
 */

// Navigation and UI icons
export { 
  Menu as MenuIcon,
  X as CloseIcon,
  ChevronDown as ArrowDownIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Globe as GlobeIcon,
  Settings as SettingsIcon,
  LogIn as LoginIcon
} from 'lucide-react'

// Content and media icons
export {
  Cookie as CookieIcon,
  Shield as ShieldIcon,
  BarChart3 as AnalyticsIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Clock as ClockIcon
} from 'lucide-react'

// Form and interaction icons
export {
  Send as SendIcon,
  Check as CheckIcon,
  AlertCircle as AlertIcon,
  Info as InfoIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon
} from 'lucide-react'

// Insurance and business icons
export {
  Car as CarIcon,
  Home as HomeIcon,
  Users as UsersIcon,
  Shield as ProtectionIcon,
  TrendingUp as GrowthIcon,
  Award as AwardIcon
} from 'lucide-react'