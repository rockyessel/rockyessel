import AsideContentLayout from '@/components/layout/aside-content';
import ProjectCard from '@/components/project/card';
import { Project } from '@/types';

import { getJsonLd, getPageSEO, pageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';
import JsonLDPage from '@/components/common/json-ld-page';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('projects');
}

const projects: Project[] = [
  {
    title: 'GraphQL Server Starter for Vercel',
    description:
      'A comprehensive yet versatile GraphQL server starter designed to streamline the development of GraphQL-powered applications.',
    longDescription:
      'This project is built with scalability and simplicity in mind, making it suitable for side hustles, educational purposes, or full-fledged production-grade applications.',
    technologies: [
      'GraphQL',
      'Node.js',
      'Express.js',
      'Git',
      'API',
      'TypeScript',
    ],
    github: 'https://github.com/rockyessel/graphql-server-starter-vercel',
    liveSite: 'https://graphqlserverstarter.vercel.app/graphql',
    images: [],
    video: '',
  },
  {
    title: 'AndyBlog Platform',
    description: 'A powerful blog platform.',
    longDescription:
      'AndyBlog is a feature-rich blogging platform that leverages modern frameworks for content creation and management. It ensures ease of use and scalability for both writers and readers.',
    technologies: ['Next.js', 'Git', 'Sanity CMS', 'TypeScript'],
    github: 'https://github.com/rockyessel/andy_blog',
    liveSite: 'https://andyblog-lake.vercel.app/',
    images: [],
    video: '',
  },
  {
    title: 'Grafbase Starter',
    description: '',
    longDescription:
      'A starter template for setting up authentication and authorization using Grafbase with Next.js, simplifying the implementation of secure GraphQL APIs.',
    technologies: ['Next-Auth', 'Grafbase', 'TypeScript'],
    github: 'https://github.com/rockyessel/grafbase-auth-starter',
    liveSite: 'https://grafbaseauth.vercel.app/',
    images: [],
    video: '',
  },
  {
    title: 'MetaDisplay - Web3.0',
    description:
      'A blockchain-based platform for creators to receive appreciation for their digital assets in Ether.',
    longDescription:
      'MetaDisplay functions similarly to "Buy Me A Coffee," enabling users to show support through Ether. The platform employs Solidity for smart contracts, ensuring secure transactions and scalability.',
    technologies: [
      'AWS',
      'React.js',
      'Express.js',
      'S3',
      'Solidity',
      'Vite',
      'thirdweb',
    ],
    github: 'https://github.com/rockyessel/MetaDisplay',
    liveSite: 'https://metadisplay.vercel.app/',
    images: [],
    video: '',
  },
  {
    title: 'KlaudBox',
    description:
      'KloudBox is a file cloud storage service for managing and sharing files.',
    longDescription:
      'The platform allows users to upload their files, generate a shareable link, and ensure easy and secure access to their data. Built for scalability and user convenience.',
    technologies: [
      'Node.js',
      'SSL Certificate',
      'Next.js',
      'Sanity CMS',
      'AWS VM',
      'Express.js',
    ],
    github: 'https://github.com/rockyessel/KlaudBox',
    liveSite: 'https://klaudbox.vercel.app/',
    images: [],
    video: '',
  },
  {
    title: 'Cloud Collaboration',
    description:
      'A secure organizational file management system built on Pangea Cloud.',
    longDescription:
      'Offering features like secure file sharing, malware scanning, sensitive data redaction, and compliance auditing, Cloud Collaboration prioritizes data protection for organizations.',
    technologies: ['Pangea Cloud', 'Next.js', 'TailwindCSS'],
    github: 'https://github.com/rockyessel/cloud-collab-cc',
    liveSite: 'https://cloudcollab.vercel.app/',
    images: [],
    video: '',
  },
  {
    title: 'freeCodeCamp Tutorial Project',
    description:
      'Demonstrates the functionality of the Gear Protocol and Vara Network.',
    longDescription:
      'This project includes examples and demonstrations designed for readers of freeCodeCamp, showcasing how to build and deploy smart contracts using the Gear Protocol.',
    technologies: ['Gear Protocol', 'Rust', 'Vara Network'],
    github: 'https://github.com/rockyessel/freecodecamp-gear-protocol',
    liveSite:
      'https://www.freecodecamp.org/news/build-and-deploy-smart-contract-rust-gear-protocol/?rel=rockyessel.me',
    images: [],
    video: '',
  },
  {
    title: 'w3s',
    description:
      'A backend service for uploading files to IPFS and converting text to audio.',
    longDescription:
      'Powered by Web3.Storage, w3s allows developers to interact with IPFS for file storage and access an API for text-to-speech functionality.',
    technologies: [
      'Node.js',
      'Express.js',
      'web3storage',
      'RESTful API',
      'IPFS',
    ],
    github: 'https://github.com/rockyessel/w3s',
    liveSite: 'https://w3s-z3x3.onrender.com/',
    images: [],
    video: '',
  },
  {
    title: 'Battle Showdown',
    description:
      'A text-based game implemented in Rust for the Vara Network using the Gear Protocol.',
    longDescription:
      'Players engage in strategic battles with a boss character, employing various tactics to win. This game is deployed on the Vara Network for blockchain-based gameplay.',
    technologies: [
      'Rust',
      'Gear Protocol',
      'Vara Network',
      'Blockchain',
      'IPFS',
    ],
    github: 'https://github.com/rockyessel/battle-showdown',
    liveSite:
      'https://idea.gear-tech.io/programs/0xf93463b29e3873ca1d116cd6c5f5a483c2c5b4c519f84636ff36201d96f51c84?node=wss%3A%2F%2Ftestnet.vara.network',
    images: [],
    video: '',
  },
  {
    title: 'Express.js Vercel Starter',
    description:
      'A versatile boilerplate for web development with Express.js and Vercel.',
    longDescription:
      'Combines the power of Express.js with the ease of deployment on Vercel, providing a solid foundation for building scalable web applications.',
    technologies: ['TypeScript', 'Express.js', 'Vercel', 'Node.js'],
    github: 'https://github.com/lleryo/expressjs-vercel-starter',
    liveSite: 'https://expressjsvercelstarter.vercel.app/',
    images: [],
    video: '',
  },
];

const ProjectPage = async () => {
  const seoDetails = pageSEO['projects'];
  const jsonLd = getJsonLd(seoDetails, 'projects');
  return (
    <AsideContentLayout>
      <JsonLDPage jsonLd={jsonLd} />
      <div>
        <h1 className='text-4xl font-bold mb-8 text-center'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </AsideContentLayout>
  );
};

export default ProjectPage;
