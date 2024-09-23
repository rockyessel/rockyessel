'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'Web2' | 'Web3';
  status: 'Completed' | 'In Progress' | 'Maintenance';
  primaryLanguage: string;
  teamSize: number;
  date: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Decentralized Social Media Platform',
    description:
      'A blockchain-based social network focusing on data ownership and privacy.',
    tags: ['React', 'Solidity', 'IPFS'],
    category: 'Web3',
    status: 'In Progress',
    primaryLanguage: 'JavaScript',
    teamSize: 5,
    date: '2023-09-15',
    github: 'https://github.com/yourusername/decentra-social',
    demo: 'https://decentra-social.example.com',
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description:
      'An admin dashboard for managing products, orders, and customers in an e-commerce platform.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    category: 'Web2',
    status: 'Completed',
    primaryLanguage: 'JavaScript',
    teamSize: 3,
    date: '2023-07-22',
    github: 'https://github.com/yourusername/ecommerce-dashboard',
    demo: 'https://ecommerce-dashboard.example.com',
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    description:
      'A platform for minting, buying, and selling unique digital assets as NFTs.',
    tags: ['Next.js', 'Ethereum', 'GraphQL'],
    category: 'Web3',
    status: 'Maintenance',
    primaryLanguage: 'TypeScript',
    teamSize: 4,
    date: '2023-05-10',
    github: 'https://github.com/yourusername/nft-marketplace',
    demo: 'https://nft-marketplace.example.com',
  },
  {
    id: 4,
    title: 'Task Management App',
    description:
      'A mobile application for personal and team task organization and tracking.',
    tags: ['React Native', 'Firebase'],
    category: 'Web2',
    status: 'Completed',
    primaryLanguage: 'JavaScript',
    teamSize: 2,
    date: '2023-03-01',
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager.example.com',
  },
  {
    id: 5,
    title: 'DeFi Yield Farming Platform',
    description:
      'A decentralized finance application for staking and earning rewards on cryptocurrency assets.',
    tags: ['React', 'Solidity', 'Web3.js'],
    category: 'Web3',
    status: 'In Progress',
    primaryLanguage: 'Solidity',
    teamSize: 6,
    date: '2023-01-15',
    github: 'https://github.com/yourusername/defi-yield-farm',
    demo: 'https://defi-yield-farm.example.com',
  },
];

export default function Component() {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Project;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sortedProjects = [...projects]
    .sort((a, b) => {
      if (!sortConfig) return 0;
      const { key, direction } = sortConfig;
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    })
    .filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.primaryLanguage.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const requestSort = (key: keyof Project) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='w-full py-10'>
      <h1 className='text-4xl font-bold mb-8'>Project Archives</h1>
      <div className='mb-4'>
        <Input
          type='text'
          placeholder='Search projects...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='max-w-sm'
          icon={<Search className='h-4 w-4 text-gray-500' />}
        />
      </div>
      <div className='rounded-md border overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=''>
                <Button variant='ghost' onClick={() => requestSort('title')}>
                  Title
                  {sortConfig?.key === 'title' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUp className='ml-2 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-2 h-4 w-4' />
                    ))}
                </Button>
              </TableHead>
              <TableHead className='w-[300px]'>Description</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>
                <Button variant='ghost' onClick={() => requestSort('category')}>
                  Category
                  {sortConfig?.key === 'category' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUp className='ml-2 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-2 h-4 w-4' />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant='ghost' onClick={() => requestSort('status')}>
                  Status
                  {sortConfig?.key === 'status' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUp className='ml-2 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-2 h-4 w-4' />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant='ghost'
                  onClick={() => requestSort('primaryLanguage')}
                >
                  Language
                  {sortConfig?.key === 'primaryLanguage' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUp className='ml-2 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-2 h-4 w-4' />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant='ghost' onClick={() => requestSort('teamSize')}>
                  Team Size
                  {sortConfig?.key === 'teamSize' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUp className='ml-2 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-2 h-4 w-4' />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant='ghost' onClick={() => requestSort('date')}>
                  Date
                  {sortConfig?.key === 'date' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUp className='ml-2 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-2 h-4 w-4' />
                    ))}
                </Button>
              </TableHead>
              <TableHead>Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className='font-medium'>{project.title}</TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className='truncate max-w-[300px]'>
                          {project.description}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='max-w-[300px]'>{project.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='mr-1 mb-1'
                    >
                      {tag}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      project.category === 'Web3' ? 'default' : 'outline'
                    }
                  >
                    {project.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </TableCell>
                <TableCell>{project.primaryLanguage}</TableCell>
                <TableCell className='text-center'>
                  {project.teamSize}
                </TableCell>
                <TableCell>
                  {new Date(project.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className='flex space-x-2'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500 hover:text-blue-700'
                    >
                      <Github className='h-5 w-5' />
                    </a>
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-green-500 hover:text-green-700'
                    >
                      <ExternalLink className='h-5 w-5' />
                    </a>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
