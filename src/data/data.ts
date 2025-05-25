import { ProblemPoint, Benefit, PackageFeature } from '../types';

export const problemPoints: ProblemPoint[] = [
  {
    id: 'p6',
    text: 'Poor design making your business appear untrustworthy and unprofessional,',
    icon: 'ShieldAlert'
  },
  {
    id: 'p4',
    text: 'Paying for ads only to see visitors click away due to poor website design',
    icon: 'Ban'
  },
  {
    id: 'p5',
    text: 'Poor first impression, causing Potential Clients to leave quickly',
    icon: 'DoorClosed'
  },
  {
    id: 'p3',
    text: 'Lack of a clear call-to-action hurting your conversions',
    icon: 'MousePointerClick'
  },
  {
    id: 'p2',
    text: 'Failing to motivate users to explore your offerings',
    icon: 'Frown'
  },
  {
    id: 'p1',
    text: 'Slow-loading, causing users to leave before they see your value',
    icon: 'Snail'
  }
];

export const benefits: Benefit[] = [
  {
    id: 'b1',
    title: 'Attract More Clients',
    description: 'After a website redesign, Xerox saw a 43% conversion rate for nurtured leads and a 20% sales increase. Turn visitors into loyal clients with strategically designed user journeys and clear calls-to-action.',
    icon: 'TrendingUp'
  },
  {
    id: 'b2',
    title: 'Appear Trustworthy',
    // description: 'Build instant credibility with a polished online presence that conveys professionalism and reliability.',
    description: "75% of users judge a company's credibility based on website design. Build instant credibility with a polished online presence that conveys professionalism and reliability.",
    icon: 'Shield'
  },
  {
    id: 'b3',
    title: 'Appear Professional',
    description: '94% of first impressions are design-related. Showcase your business with the professionalism it deserves through thoughtful design and cohesive branding.',
    icon: 'Briefcase'
  },
  {
    id: 'b4',
    title: 'Strong Brand Image',
    description: 'Swiss Gear saw an 84% increase in time spent on site and a 132% year-over-year online revenue boost after improving their web design. Cultivate a memorable and impactful brand image that resonates with your target audience.',
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
      'Brand identity development',
      'Detailed brand guidelines',
      'New logo design',
      'Social media profile assets (banners, profile pictures)',
      'Professional letterhead design',
      'Custom business card design',
    ],
    icon: 'Paintbrush'
  }
];