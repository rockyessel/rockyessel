import { authOptions } from '@/lib/auth/options';
import { WEB_MASTER_API_KEY } from '@/lib/config/env';
import { createOgImage, domainURL, profile } from '@/lib/utils/helpers';
import { IPageJsonLd, PostType } from '@/types';
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
          url: ogImage,
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
      google: '4mpTgUJCrHY_8cR7Qe-t70YpmGldJHhIQBs2LNkEj1I',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['my-email', 'my-link'],
        'msvalidate.01': '06D1B9DE35AD038FB36247A657FE080E',
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
    archives: '/archives',
    assets: '/assets/image1.jpg',
    formatDetection: {
      email: false,
      telephone: false,
    },
    generator: 'Next.js',
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
      shortcut: '/icons/shortcut-icon.png',
      apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
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
    title: 'Rocky Essel | Quantum Computing, and Web2',
    description: `Welcome to Rocky Essel's platform showcasing work in quantum computing, and web2 technologies. Explore projects, writings, and resources at the intersection of these transformative fields.`,
    keywords:
      'Rocky Essel, Quantum Computing, Web2, Software Developer, Technology Integration, AI, Machine Learning',
    openGraphTitle: 'Rocky Essel | Pioneering the Future of Tech',
    openGraphDescription:
      'Discover projects and insights in quantum computing, and web2 technologies by Rocky Essel.',
    canonicalUrl: `${baseUrl}`,
    twitterHandle: '@rockyessel',
    imageUrl: profile,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  writings: {
    title: 'Tech Insights: Quantum Computing, and Web2 | Rocky Essel',
    description: `Explore Rocky Essel's in-depth writings on the convergence of quantum computing, and web2 technologies. Gain insights into the future of tech innovation.`,
    keywords:
      'Research, Quantum Computing Advancements, applications, Web2 Integration, AI in Quantum Tech Convergence',
    openGraphTitle: `Cutting-edge Tech Insights | Rocky Essel's Writings`,
    openGraphDescription:
      'Dive into articles exploring the latest developments in quantum computing, and their integration with web2 technologies.',
    canonicalUrl: `${baseUrl}/writings`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/writings-banner.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  projects: {
    title: 'Projects in Quantum Computing, and Web2 | Rocky Essel',
    description: `Discover Rocky Essel's groundbreaking projects combining quantum computing, and web2 technologies. Explore the future of integrated tech solutions.`,
    keywords:
      'Projects, Quantum Computing Applications, solutions, Web2 Integration, AI, Quantum Cryptography, Web Apps',
    openGraphTitle: 'Futuristic Tech Projects by Rocky Essel',
    openGraphDescription:
      'Explore a portfolio of innovative projects pushing the boundaries of quantum computing, and web2 integration.',
    canonicalUrl: `${baseUrl}/projects`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/projects-showcase.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  resume: {
    title: 'Resume | Rocky Essel',
    description: 'View my professional resume.',
    keywords: 'Rocky Essel Resume, developer, software developer, writer',
    openGraphTitle: 'Rocky Essel - Developer',
    openGraphDescription:
      'Explore the career highlights, my technical skills, and project accomplishments.',
    canonicalUrl: `${baseUrl}/resume`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/rocky-essel-professional.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  archives: {
    title: 'Archives | Rocky Essel',
    description: `Access a comprehensive archive of Rocky Essel's projects.`,
    keywords: 'Projects, Web Projects, Archived projects',
    openGraphTitle: 'Project Archives by Rocky Essel',
    openGraphDescription: 'Project archived.',
    canonicalUrl: `${baseUrl}/archives`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/archives-banner.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  links: {
    title: 'My Links | Rocky Essel',
    description: 'Discover a list of my online presence.',
    keywords: 'facebook, instagram, twitter, x, youtube',
    openGraphTitle: 'My Links | Rocky Essel',
    openGraphDescription: 'Discover a list of my online presence.',
    canonicalUrl: `${baseUrl}/links`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/resources-collection.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  contact: {
    title: 'Contact | Rocky Essel',
    description: `Reach out to me for inquiries, collaborations, or a chat.`,
    keywords: 'Contact Rocky Essel, developer',
    openGraphTitle: 'Contact | Rocky Essel',
    openGraphDescription:
      'Reach out to me for inquiries, collaborations, or a chat.',
    canonicalUrl: `${baseUrl}/contact`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/contact-banner.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  about: {
    title: 'About | Rocky Essel',
    description: 'Learn more about me and my vision that drive my work.',
    keywords: 'About, Rocky Essel, developer',
    openGraphTitle: 'About | Rocky Essel',
    openGraphDescription:
      'Learn more about me and my vision that drive my work.',
    canonicalUrl: `${baseUrl}/about`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/about-banner.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
  newsletters: {
    title: 'Newsletters | Get Updates',
    description: `Subscribe to my newsletters for insights and updates on quantum computing, and web technologies. Stay informed on the latest trends and developments.`,
    keywords:
      'Rocky Essel Newsletters, Tech Innovations, Quantum Computing News, Web Trends',
    openGraphTitle: "Stay Updated with Rocky Essel's Newsletters",
    openGraphDescription:
      'Join the community and receive newsletters from Rocky Essel about the latest advancements in quantum computing, and the web.',
    canonicalUrl: `${baseUrl}/newsletters`,
    twitterHandle: '@rockyessel',
    imageUrl: `${baseUrl}/images/newsletter-banner.jpg`,
    author: { name: 'Rocky Essel', url: 'https://rockyessel.me/about' },
  },
};

interface IGetDashboardPageBasicSEO {
  title: string;
  description: string;
  keywords: string[];
}

export const getDashboardPageBasicSEO = async (
  props: IGetDashboardPageBasicSEO
): Promise<Metadata> => {
  const { description, keywords, title } = props;

  return {
    title: `${title} | Dashboard`,
    description: description,
    keywords: keywords,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    verification: {
      google: '4mpTgUJCrHY_8cR7Qe-t70YpmGldJHhIQBs2LNkEj1I',
      yandex: 'e685e318a7ebab69',
      other: {
        email: 'rockyessel76@gmail.com',
        phone: '+233 54 681 3132',
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(baseUrl),
    manifest: '/site.webmanifest',
  };
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
      siteName: 'Rocky Essel',
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
      // @ts-ignore
      domain: domainURL(),
    },
    alternates: {
      canonical: seoDetails.canonicalUrl,
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
      google: '4mpTgUJCrHY_8cR7Qe-t70YpmGldJHhIQBs2LNkEj1I',
      yandex: 'e685e318a7ebab69',
      yahoo: 'your-bing-verification-code',
      me: '',
      other: {
        email: 'rockyessel76@gmail.com',
        phone: '+233 54 681 3132',
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(baseUrl),
    manifest: '/site.webmanifest',
  };
};

export const getJsonLd = (seoDetails: SEODetails, page: string) => {
  const baseJsonLd: IPageJsonLd = {
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
      name: 'Rocky Essel',
      description:
        'Exploring the frontiers of Robotics, Quantum Computing, Blockchain, Web2, and Web3',
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
      description: 'Quantum Computing, and Software Development',
      sameAs: [
        'https://twitter.com/rockyessel',
        'https://github.com/rockyessel',
        'https://linkedin.com/in/rockyessel',
      ],
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Quantum Computing',
        description:
          'Investigating quantum computing algorithms and their potential impact',
        url: `${baseUrl}/topics/quantum-computing`,
      },
      {
        '@type': 'Thing',
        name: 'Web',
        description:
          'Integrating traditional web technologies with emerging tech',
        url: `${baseUrl}/topics/web2`,
      },
    ],
    mentions: [
      {
        '@type': 'Thing',
        name: 'Machine Learning',
        url: `${baseUrl}/topics/machine-learning`,
      },
    ],
    baseJsonLd: {
      '@type': 'ItemList',
      itemListElement: [],
    },
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
            name: 'Latest Quantum Blockchain Articles',
            '@type': 'BlogPosting',
            position: 1,
            headline: 'The Future of Quantum Blockchain',
            url: `${baseUrl}/topics/quantum-blockchain`,
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
          //TODO: Would dynamically generate these based actual projects
          {
            '@type': 'SoftwareApplication',
            position: 1,
            name: 'QuantumBot',
            applicationCategory: 'Robotics Software',
            url: `${baseUrl}/projects/quantumbot`,
          },
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
        knowsAbout: ['Quantum Computing', 'Web'],
      };
      break;
    //TODO: Add cases for 'archives' and 'links'
  }

  return baseJsonLd;
};

export const submitUrlToBing = async (url: string) => {
  const apiKey = WEB_MASTER_API_KEY;
  const siteUrl = domainURL();

  const requestBody = {
    siteUrl: siteUrl,
    urlList: [url],
  };

  const response = await fetch(
    `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (response.ok) {
    console.log('URLs successfully submitted to Bing!');
    return true;
  } else {
    console.error('Failed to submit URLs to Bing:', response.statusText);
    return false;
  }
};

// Example usage: After publishing an article
const newArticleUrls = [
  'http://yoursite.com/new-article-1',
  'http://yoursite.com/new-article-2',
];
