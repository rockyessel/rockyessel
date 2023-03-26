import { HomeProps, NoteCardProps } from '@/interface';
import Link from 'next/link';
import { NoteCard, ProjectCard } from '@/components';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';

interface Props {
  project_data: HomeProps[];
  note_data: NoteCardProps[];
}

const Body = (props: Props) => {
  const professional_project: HomeProps[] = props?.project_data?.filter(
    (data) => data.type.replace(' ', '_').toLowerCase() === 'professional_work'
  );

  const side_project: HomeProps[] = props?.project_data?.filter(
    (data) => data.type.replace(' ', '_').toLowerCase() === 'side_project'
  );

  return (
    <section className='flex flex-col gap-20'>
      {professional_project.length <= 0 ? null : (
        <div className='flex flex-col gap-5 md:gap-2.5'>
          <p className='font-extrabold text-3xl capitalize'>
            Professional Work
          </p>
          <div
            className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-2`}
          >
            {professional_project.slice(0, 4)?.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>

          <Link href='/projects'>
            <span className='float-right text-2xl font-bold  inline-flex items-center group'>
              <span className='group-hover:text-rose-600'>
                View all projects
              </span>
              <MdArrowForward className='group-hover:ml-2 transition-all duration-500 group-hover:text-rose-600' />
            </span>
          </Link>
        </div>
      )}

      <div className='flex flex-col gap-5 md:gap-2.5'>
        <p className='font-extrabold text-3xl capitalize'>Side Projects</p>

        {!side_project.length ? (
          <p className=' text-lg md:text-3xl font-light'>
            No side project yet.
          </p>
        ) : (
          <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-2'>
            {side_project
              ?.sort(
                (a, b) =>
                  new Date(b?._createdAt).getTime() -
                  new Date(a?._createdAt).getTime()
              )
              ?.slice(0, 4)
              .map((data, index) => (
                <ProjectCard key={index} data={data} />
              ))}
          </ul>
        )}

        <Link href='/projects'>
          <span className='float-right text-2xl font-bold  inline-flex items-center group'>
            <span className='group-hover:text-rose-600'>
              {' '}
              View all projects
            </span>
            <MdArrowForward className='group-hover:ml-2 transition-all duration-500 group-hover:text-rose-600' />
          </span>
        </Link>
      </div>

      <div className='w-full flex flex-col gap-5 md:gap-2.5'>
        <p className='font-extrabold text-3xl'>Thoughts</p>

        <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-2 overflow-hidden'>
          {props?.note_data
            ?.sort(
              (a, b) =>
                new Date(b?._createdAt).getTime() -
                new Date(a?._createdAt).getTime()
            )
            ?.slice(0, 4)
            ?.map((data, index) => (
              <NoteCard key={index} data={data} />
            ))}
        </ul>

        <Link href='/thoughts'>
          <span className='float-right text-2xl font-bold  inline-flex items-center group'>
            <span className='group-hover:text-rose-600'>View all Thoughts</span>
            <MdArrowForward className='group-hover:ml-2 transition-all duration-500 group-hover:text-rose-600' />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Body;
