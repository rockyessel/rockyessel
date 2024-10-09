import { authOptions } from '@/lib/auth/options';
import { createOgImage, domainURL } from '@/lib/utils/helpers';
import { PostType } from '@/types';
import { Metadata } from 'next';
import { getServerSession, Session } from 'next-auth';

export const getServerUser = async (): Promise<Session | null> => {
  const session = await getServerSession(authOptions);

  if (session) return session;
  return null;
};

export const postSEO = async (post: PostType): Promise<Metadata> => {
  const ogImage = createOgImage({
    meta: ['rockyessel.me', ...post?.tags!.slice(0, 3)].join(' • ') || '',
    title: String(post?.title),
  });

  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.seoKeywords?.join(',') || post?.tags?.join(','),
    authors: {
      name: 'Rocky Essel',
      url: 'https://avatars.githubusercontent.com/u/97303710?v=4',
    },
    applicationName: 'Decentralized Blog Platform',
    robots: 'index, follow',
    openGraph: {
      title: post?.seoTitle || post?.title,
      description: post?.seoDescription || post?.description,
      type: 'website',
      locale: 'en',
      url: domainURL(`/${post?.slug}`),
      siteName: 'ROCKYESSEL',
      images: [
        {
          url: '/default-cover.jpg',
          width: 1200,
          height: 630,
          alt: post?.seoTitle || post?.title,
        },
      ],
    },
    bookmarks: [], // You can add relevant links for bookmarking

    category: post?.category || 'Technology', // Default category if none is provided
    classification: 'Blog Post', // Type of content
    publisher: 'Rocky Essel',
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['my-email', 'my-link'],
      },
    },
    creator: 'Rocky Essel',
    other: {
      customProperty: 'customValue', // Add any other relevant custom metadata
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    archives: '/archives', // URL to the archive page
    assets: '/assets/image1.jpg', // Add relevant images or media assets,
    formatDetection: {
      email: false, // Disable email detection
      telephone: false, // Disable phone number detection
    },
    generator: 'Next.js', // Indicate the platform used to build the site
    // metadataBase: 'https://rockyessel.me', // Base URL for metadata resolution
    twitter: {
      card: 'summary_large_image',
      site: '@symbion__',
      title: post?.seoTitle || post?.title,
      description: post?.seoDescription || post?.description,
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
};


interface SEODetails {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle: string;
  openGraphDescription: string;
  canonicalUrl: string;
  twitterHandle: string;
  imageUrl: string;
  datePublished?: string;
  dateModified?: string;
  author: {
    name: string;
    url: string;
  };
}

interface PageSEO {
  [key: string]: SEODetails;
}

const baseUrl = domainURL();

export const pageSEO: PageSEO = {
  home: {
    title: 'Rocky Essel | Innovator in Robotics, Quantum Computing, Blockchain, and Web2',
    description: `Welcome to Rocky Essel's platform showcasing cutting-edge work in robotics, quantum computing, blockchain, and web2 technologies. Explore projects, writings, and resources at the intersection of these transformative fields.`,
    keywords: 'Rocky Essel, Robotics, Quantum Computing, Blockchain, Web2, Innovation, Technology Integration, AI, Machine Learning',
    openGraphTitle: 'Rocky Essel | Pioneering the Future of Tech',
    openGraphDescription: 'Discover groundbreaking projects and insights in robotics, quantum computing, blockchain, and web2 technologies by Rocky Essel.',
    canonicalUrl: `${baseUrl}`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/rocky-essel-profile.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
  writings: {
    title: 'Tech Insights: Robotics, Quantum Computing, Blockchain, and Web2 | Rocky Essel',
    description: `Explore Rocky Essel's in-depth writings on the convergence of robotics, quantum computing, blockchain, and web2 technologies. Gain insights into the future of tech innovation.`,
    keywords: 'Robotics Research, Quantum Computing Advancements, Blockchain Applications, Web2 Integration, AI in Robotics, Quantum Blockchain, Tech Convergence',
    openGraphTitle: `Cutting-edge Tech Insights | Rocky Essel's Writings`,
    openGraphDescription: 'Dive into articles exploring the latest developments in robotics, quantum computing, blockchain, and their integration with web2 technologies.',
    canonicalUrl: `${baseUrl}/writings`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/writings-banner.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
  projects: {
    title: 'Innovative Projects in Robotics, Quantum Computing, Blockchain, and Web2 | Rocky Essel',
    description: `Discover Rocky Essel's groundbreaking projects combining robotics, quantum computing, blockchain, and web2 technologies. Explore the future of integrated tech solutions.`,
    keywords: 'Robotics Projects, Quantum Computing Applications, Blockchain Solutions, Web2 Integration, AI-powered Robots, Quantum Cryptography, Decentralized Web Apps',
    openGraphTitle: 'Futuristic Tech Projects by Rocky Essel',
    openGraphDescription: 'Explore a portfolio of innovative projects pushing the boundaries of robotics, quantum computing, blockchain, and web2 integration.',
    canonicalUrl: `${baseUrl}/projects`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/projects-showcase.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
  resume: {
    title: 'Rocky Essel | Innovator in Robotics, Quantum Computing, Blockchain, and Web2',
    description: 'View the professional resume of Rocky Essel, showcasing expertise in robotics, quantum computing, blockchain development, and web2 technologies integration.',
    keywords: 'Rocky Essel Resume, Robotics Engineer, Quantum Computing Specialist, Blockchain Developer, Web2 Expert, AI Researcher, Tech Innovator',
    openGraphTitle: 'Rocky Essel - Multidisciplinary Tech Professional',
    openGraphDescription: 'Explore the career highlights, technical skills, and project accomplishments of Rocky Essel across robotics, quantum computing, blockchain, and web2 domains.',
    canonicalUrl: `${baseUrl}/resume`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/rocky-essel-professional.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
  archives: {
    title: 'Tech Evolution Archives: Robotics, Quantum Computing, Blockchain, and Web2 | Rocky Essel',
    description: `Access a comprehensive archive of Rocky Essel's writings on the evolution of robotics, quantum computing, blockchain, and their integration with web2 technologies.`,
    keywords: 'Robotics History, Quantum Computing Evolution, Blockchain Advancements, Web2 Transformation, Tech Convergence Chronicles, AI Development',
    openGraphTitle: 'Tech Evolution Archives by Rocky Essel',
    openGraphDescription: 'Dive into a treasure trove of historical insights and future predictions in robotics, quantum computing, blockchain, and web2 technologies.',
    canonicalUrl: `${baseUrl}/archives`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/archives-banner.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
  links: {
    title: 'Essential Resources: Robotics, Quantum Computing, Blockchain, and Web2 | Rocky Essel',
    description: 'Discover a curated collection of high-quality resources on robotics, quantum computing, blockchain innovations, and web2 technologies integration.',
    keywords: 'Robotics Resources, Quantum Computing Tools, Blockchain Development, Web2 Integration, AI Libraries, Quantum Algorithms, Decentralized Protocols',
    openGraphTitle: 'Curated Tech Resources by Rocky Essel',
    openGraphDescription: 'Access a carefully selected list of valuable resources, tools, and references for innovators in robotics, quantum computing, blockchain, and web2 technologies.',
    canonicalUrl: `${baseUrl}/links`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/resources-collection.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
   contact: {
    title: 'Contact Rocky Essel | Innovator in Robotics, Quantum Computing, Blockchain, and Web2',
    description: `Get in touch with Rocky Essel to discuss collaborations in robotics, quantum computing, blockchain, and web2 technologies. Whether you're interested in consulting or exploring innovative solutions, connect here.`,
    keywords: 'Contact Rocky Essel, Robotics Expert, Quantum Computing Consultant, Blockchain Developer, Web2 Integration, Collaboration, Technology Consultant',
    openGraphTitle: 'Contact Rocky Essel | Innovator in Tech',
    openGraphDescription: 'Reach out to Rocky Essel for inquiries, collaborations, and consulting in robotics, quantum computing, blockchain, and web2 technologies.',
    canonicalUrl: `${baseUrl}/contact`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/contact-banner.jpg`,
    author: {
      name: 'Rocky Essel',
      url: 'https://rockyessel.com/about',
    },
  },
};

export const getPageSEO = async (page: string): Promise<Metadata> => {
  const seoDetails = pageSEO[page];

  if (!seoDetails) {
    throw new Error(`SEO details not found for page: ${page}`);
  }


  return {
    title: seoDetails.title,
    description: seoDetails.description,
    keywords: seoDetails.keywords,
    authors: [{ name: seoDetails.author.name, url: seoDetails.author.url }],
    openGraph: {
      title: seoDetails.openGraphTitle,
      description: seoDetails.openGraphDescription,
      url: seoDetails.canonicalUrl,
      siteName: 'Rocky Essel | Tech Innovator',
      images: [
        {
          url: seoDetails.imageUrl,
          width: 1200,
          height: 630,
          alt: seoDetails.openGraphTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoDetails.openGraphTitle,
      description: seoDetails.openGraphDescription,
      creator: seoDetails.twitterHandle,
      images: [seoDetails.imageUrl],
    },
    alternates: {
      canonical: seoDetails.canonicalUrl,
    },
    other: {
      'google-site-verification': 'your-google-site-verification-code',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-site-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-bing-verification-code',
      me: '',
      other: {
        email:'rockyessel76@gmail.com',
        phone:'+233 54 681 3132'
      }
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(baseUrl),
    themeColor: '#ffffff',
    manifest: '/site.webmanifest',
  };
};


export const getJsonLd = (seoDetails: SEODetails, page: string) => {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${seoDetails.canonicalUrl}#webpage`,
    url: seoDetails.canonicalUrl,
    name: seoDetails.title,
    description: seoDetails.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      url: baseUrl,
      name: 'Rocky Essel | Tech Innovator',
      description: 'Exploring the frontiers of Robotics, Quantum Computing, Blockchain, Web2, and Web3',
      publisher: {
        '@type': 'Person',
        name: 'Rocky Essel',
        url: `${baseUrl}/about`,
      },
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${seoDetails.imageUrl}#primaryimage`,
      url: seoDetails.imageUrl,
      width: 1200,
      height: 630,
      caption: seoDetails.title,
    },
    primaryImageOfPage: {
      '@id': `${seoDetails.imageUrl}#primaryimage`,
    },
    datePublished: seoDetails.datePublished || new Date().toISOString(),
    dateModified: seoDetails.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/about#author`,
      name: seoDetails.author.name,
      url: seoDetails.author.url,
      description: 'Tech innovator specializing in Robotics, Quantum Computing, Blockchain, Web2, and Web3 technologies',
      sameAs: [
        'https://twitter.com/rockyessel',
        'https://github.com/rockyessel',
        'https://linkedin.com/in/rockyessel',
      ],
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Robotics',
        description: 'Exploring advanced robotics technologies and their applications',
        url: `${baseUrl}/topics/robotics`,
      },
      {
        '@type': 'Thing',
        name: 'Quantum Computing',
        description: 'Investigating quantum computing algorithms and their potential impact',
        url: `${baseUrl}/topics/quantum-computing`,
      },
      {
        '@type': 'Thing',
        name: 'Blockchain',
        description: 'Developing innovative blockchain solutions and decentralized applications',
        url: `${baseUrl}/topics/blockchain`,
      },
      {
        '@type': 'Thing',
        name: 'Web2',
        description: 'Integrating traditional web technologies with emerging tech',
        url: `${baseUrl}/topics/web2`,
      },
      {
        '@type': 'Thing',
        name: 'Web3',
        description: 'Building the decentralized web and exploring its possibilities',
        url: `${baseUrl}/topics/web3`,
      },
    ],
    mentions: [
      {
        '@type': 'Thing',
        name: 'Artificial Intelligence',
        url: `${baseUrl}/topics/ai`,
      },
      {
        '@type': 'Thing',
        name: 'Machine Learning',
        url: `${baseUrl}/topics/machine-learning`,
      },
      {
        '@type': 'Thing',
        name: 'Decentralized Finance',
        url: `${baseUrl}/topics/defi`,
      },
    ],
  };

  // Add page-specific JSON-LD properties
  switch (page) {
    case 'home':
      baseJsonLd['@type'] = ['WebPage', 'CollectionPage'];
      baseJsonLd.mainEntity = {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Latest Projects',
            url: `${baseUrl}/projects`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Recent Writings',
            url: `${baseUrl}/writings`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Featured Resources',
            url: `${baseUrl}/links`,
          },
        ],
      };
      break;
    case 'writings':
      baseJsonLd['@type'] = ['WebPage', 'CollectionPage'];
      baseJsonLd.mainEntity = {
        '@type': 'ItemList',
        itemListElement: [
          // You would dynamically generate these based on your actual blog posts
          {
            '@type': 'BlogPosting',
            position: 1,
            headline: 'The Future of Quantum Blockchain',
            url: `${baseUrl}/writings/quantum-blockchain`,
          },
          // Add more blog posts here
        ],
      };
      break;
    case 'projects':
      baseJsonLd['@type'] = ['WebPage', 'CollectionPage'];
      baseJsonLd.mainEntity = {
        '@type': 'ItemList',
        itemListElement: [
          // You would dynamically generate these based on your actual projects
          {
            '@type': 'SoftwareApplication',
            position: 1,
            name: 'QuantumBot',
            applicationCategory: 'Robotics Software',
            url: `${baseUrl}/projects/quantumbot`,
          },
          // Add more projects here
        ],
      };
      break;
    case 'resume':
      baseJsonLd['@type'] = ['WebPage', 'ProfilePage'];
      baseJsonLd.mainEntity = {
        '@type': 'Person',
        '@id': `${baseUrl}/about#author`,
        name: seoDetails.author.name,
        url: seoDetails.author.url,
        jobTitle: 'Tech Innovator and Researcher',
        worksFor: {
          '@type': 'Organization',
          name: 'Tech Innovation Labs',
          url: 'https://techinnovationlabs.com',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Massachusetts Institute of Technology',
          url: 'https://www.mit.edu',
        },
        knowsAbout: ['Robotics', 'Quantum Computing', 'Blockchain', 'Web2', 'Web3'],
      };
      break;
    // Add cases for 'archives' and 'links' if needed
  }

  return baseJsonLd;
};
