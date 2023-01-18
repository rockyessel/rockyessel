import React from 'react';
import { Layout, Line, ProfileCard, SkillsCard } from './index';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const ProjectDetailsCard = () => {
  return (
    <React.Fragment>
      <Line />
      <div className='flex flex-col gap-2'>
        <h1 className='font-extrabold text-3xl capitalize'>
          Law School Transparency
        </h1>
        <div className='flex flex-col flex-wrap gap-1'>
          <span className='inline-flex items-center gap-1 p-2 w-fit border border-black rounded-md bg-orange-400 text-'>
            See Live <FiExternalLink />
          </span>
          <SkillsCard />
        </div>
      </div>
      <Line />

      <div>
        <Image
          className='rounded-md mb-4 shadow-md'
          src='https://trishalim.com/_next/image?url=https%3A%2F%2Fpinaydigitalnomad.com%2Fcontent%2Fimages%2F2022%2F03%2Ftyler-nix-sh3LSNbyj7k-unsplash--1-.jpg&w=1920&q=75'
          width={1000}
          height={1000}
          alt=''
        />
      </div>

      <div className='flex items-center gap-2'>
        <Image
          className='rounded-md mb-4 w-20 shadow-md'
          src='https://trishalim.com/_next/image?url=%2Fproject-educaider-1.png&w=1080&q=75'
          width={1000}
          height={1000}
          alt=''
        />
        <Image
          className='rounded-md mb-4 w-20 shadow-md'
          src='https://trishalim.com/_next/image?url=%2Fproject-educaider-2.png&w=1080&q=75'
          width={1000}
          height={1000}
          alt=''
        />
        <Image
          className='rounded-md mb-4 w-20 shadow-md'
          src='https://trishalim.com/_next/image?url=%2Fproject-educaider-3.png&w=1080&q=75'
          width={1000}
          height={1000}
          alt=''
        />
      </div>

      <div>
        <article className='prose mb-5'>
          <p>
            Law School Transparency is a tool for finding law schools based on
            your job preferences, budget, where you want to work, and more.
          </p>

          <h3>Home page redesign</h3>
          <p>
            The offerings are not clear. What does LST do? It does many
            different things, but it needs to focus on solving one problem, and
            do it very well. The rest should just be secondary/bonus tools.The
            offerings are not clear. What does LST do? It does many different
            things, but it needs to focus on solving one problem, and do it very
            well. The rest should just be secondary/bonus tools.The offerings
            are not clear. What does LST do? It does many different things, but
            it needs to focus on solving one problem, and do it very well. The
            rest should just be secondary/bonus tools.The offerings are not
            clear. What does LST do? It does many different things, but it needs
            to focus on solving one problem, and do it very well. The rest
            should just be secondary/bonus tools.The offerings are not clear.
            What does LST do? It does many different things, but it needs to
            focus on solving one problem, and do it very well. The rest should
            just be secondary/bonus tools.
          </p>
        </article>
        <div>
          <ProfileCard />
        </div>
      </div>
      <Line />
    </React.Fragment>
  );
};

export default ProjectDetailsCard;
