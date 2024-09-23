'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Github, ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div
      className='bg-zinc-800/50 border border-zinc-700/40 rounded-lg overflow-hidden shadow-lg'
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {project.images.map((image, index) => (
            <div key={index} className='flex-[0_0_100%]'>
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className='w-full h-48 object-cover'
              />
            </div>
          ))}
          <div className='flex-[0_0_100%]'>
            <video className='w-full h-48 object-cover' controls>
              <source src={project.video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-bold mb-2'>{project.title}</p>
          <div className='flex items-center gap-1.5'>
            <button
              onClick={scrollPrev}
              className='bg-black bg-opacity-50 text-white p-2 rounded-full'
              aria-label='Previous slide'
            >
              <ChevronLeft className='w-6 h-6' />
            </button>
            <button
              onClick={scrollNext}
              className='bg-black bg-opacity-50 text-white p-2 rounded-full'
              aria-label='Next slide'
            >
              <ChevronRight className='w-6 h-6' />
            </button>
          </div>
        </div>
        <p className='text-gray-300 mb-4'>{project.description}</p>
        <div className='flex space-x-4 mb-4'>
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-400 hover:text-blue-300'
          >
            <Github className='w-5 h-5 mr-1' />
            GitHub
          </a>
          <a
            href={project.liveSite}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-green-400 hover:text-green-300'
          >
            <ExternalLink className='w-5 h-5 mr-1' />
            Live Site
          </a>
        </div>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className='overflow-hidden'
        >
          <p className='text-gray-400 mb-4'>{project.longDescription}</p>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold mb-2'>Technologies Used:</h3>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='bg-gray-700 text-sm rounded-full px-3 py-1'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='flex items-center justify-center w-full text-gray-400 hover:text-white transition-colors duration-200'
        >
          {isExpanded ? (
            <>
              <ChevronUp className='w-5 h-5 mr-1' />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className='w-5 h-5 mr-1' />
              Show More
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
