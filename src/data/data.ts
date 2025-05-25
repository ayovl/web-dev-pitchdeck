import { ProblemPoint, Benefit, PackageFeature } from '../types';

export const problemPoints: ProblemPoint[] = [
  {
    id: 'p1',
    text: 'Slow-loading, causing users to leave before they see your value',
    icon: 'Snail'
  },
  {
    id: 'p2',
    text: 'Failing to motivate customers to explore your offerings',
    icon: 'Frown'
  },
  {
    id: 'p3',
    text: 'Lack of a clear call-to-action hurting your conversions',
    icon: 'MousePointerClick'
  },
  {
    id: 'p4',
    text: 'Paying for ads only to see visitors click away due to poor website design',
    icon: 'Ban'
  },
  {
    id: 'p5',
    text: 'Poor first impression, causing visitors to leave quickly?',
    icon: 'DoorClosed'
  }
];

export const benefits: Benefit[] = [
  {
    id: 'b1',
    title: 'Higher Conversion Rates',
    description: 'Turn visitors into loyal clients with strategically designed user journeys and clear calls-to-action.',
    icon: 'TrendingUp'
  },
  {
    id: 'b2',
    title: 'Appear Trustworthy',
    description: 'Build instant credibility with a polished online presence that conveys professionalism and reliability.',
    icon: 'Shield'
  },
  {
    id: 'b3',
    title: 'Appear Professional',
    description: 'Showcase your business with the professionalism it deserves through thoughtful design and cohesive branding.',
    icon: 'Briefcase'
  },
  {
    id: 'b4',
    title: 'Strong Brand Image',
    description: 'Cultivate a memorable and impactful brand image that resonates with your target audience.',
    icon: 'Palette'
  }
];

export const packageFeatures: PackageFeature[] = [
  {
    id: 'f1',
    title: 'Website Design & Development',
    features: [
      'Fully custom website using modern tech with animations and interactivity',
      'Responsive design for mobile, tablet, desktop',
      'Up to 10 pages',
      'Contact form setup'
    ],
    icon: 'Monitor'
  },
  {
    id: 'f2',
    title: 'SEO & Copywriting',
    features: [
      'SEO optimized',
      'Fast loading and search engine indexing',
      'Clear user flow to boost conversions',
      'Conversion-optimized copy'
    ],
    icon: 'FileEdit'
  },
  {
    id: 'f3',
    title: 'Branding',
    features: [
      'Logo refresh',
      'Color palette and basic brand guidelines',
      'Typography'
    ],
    icon: 'Palette'
  },
  {
    id: 'f4',
    title: 'Hosting & Setup',
    features: [
      'Fully free setup included',
      'Custom domain',
      'Deployed & live with blazing-fast performance',
      'Free hosting included (Netlify/Vercel)'
    ],
    icon: 'Rocket'
  },
  {
    id: 'f5',
    title: 'Lifetime Support',
    features: [
      'Minor edits, uptime monitoring, tech support — included for life',
      'Never worry about updates or bugs again',
      'Updates, edits, fixes for life'
    ],
    icon: 'Wrench'
  },
  {
    id: 'f6',
    title: 'Free Branding Refresh',
    features: [
      'Comprehensive brand identity development',
      'Detailed brand guidelines',
      'New bespoke logo design',
      'Social media profile assets (banners, profile pictures)',
      'Professional letterhead design',
      'Custom business card design',
      'Email signature'
    ],
    icon: 'Paintbrush'
  }
];