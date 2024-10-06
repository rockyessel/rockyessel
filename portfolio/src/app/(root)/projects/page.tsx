import AsideContentLayout from '@/components/layout/aside-content';
import ProjectCard from '@/components/project/card';
import { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'Symbion: Decentralized Blog CMS',
    description: 'A decentralized platform for blogs and content licensing.',
    longDescription:
      'Symbion is a revolutionary decentralized content management system built on blockchain technology. It enables content creators to publish, manage, and monetize their blogs while ensuring data integrity and ownership. The platform incorporates smart contracts for automated licensing and royalty distribution.',
    technologies: ['React', 'Solidity', 'IPFS', 'Ethereum', 'Node.js'],
    github: 'https://github.com/yourusername/symbion',
    liveSite: 'https://symbion.io',
    images: [
      '/placeholder.svg?height=200&width=400',
      '/placeholder.svg?height=200&width=400',
    ],
    video: 'https://example.com/symbion-demo.mp4',
  },
  {
    title: 'Web3 Storage Integration',
    description:
      'A Web3 decentralized file storage system integrated with Next.js for seamless file uploads and retrieval.',
    longDescription:
      'This project integrates Web3 storage solutions with Next.js applications, providing a decentralized approach to file management. It features client-side encryption, distributed storage across multiple nodes, and seamless retrieval mechanisms. The system ensures high availability and data integrity while maintaining user privacy.',
    technologies: ['Next.js', 'Web3.js', 'IPFS', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/web3-storage-nextjs',
    liveSite: 'https://web3storage-demo.vercel.app',
    images: [
      '/placeholder.svg?height=200&width=400',
      '/placeholder.svg?height=200&width=400',
    ],
    video: 'https://example.com/web3-storage-demo.mp4',
  },
];

const ProjectPage = () => {
  return (
    <AsideContentLayout>
      <div>
        <h1 className='text-4xl font-bold mb-8 text-center'>Pinned Projects</h1>
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
