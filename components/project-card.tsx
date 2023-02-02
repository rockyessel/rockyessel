import React from 'react';
import { AiFillFolderOpen } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HomeProps } from '@/interface';
import { data_list } from '@/utils/services';
import { BsGithub } from 'react-icons/bs';
import { SiWebmoney } from 'react-icons/si';

const ProjectCard = ({ data }: { data: HomeProps }): JSX.Element => {
  const router: string = useRouter().asPath.split('/').slice(-1)[0];

  const if_true = router === 'projects';

  const included_tags = data?.tags?.split(',');

  return (
    <div className='w-[20rem] bg-black p-4 rounded-md shadow-md'>
      <div>
        <p className={`font-bold ${ if_true ? 'w-full inline-flex justify-between items-center' : null }`}>
          <span style={{ fontFamily: 'Noe Display' }}>{data?.title}</span>
          {if_true && <span className='p-1 rounded-md'>{data?.type}</span>}
        </p>

        <div>
          <ul className='rounded-md py-2 flex flex-wrap gap-2 items-center'>
            {data_list?.map((list, index) =>
              included_tags?.includes(list.name) ? (
                <Link
                  key={index}
                  href={`/project/${list.name.toLocaleLowerCase()}`}
                >
                  <li
                    className='tooltip cursor-pointer inline-flex items-center gap-1 border border-white p-1 font-medium'
                    data-tip={list?.name}
                  >
                    {list?.icon} {list?.name}
                  </li>
                </Link>
              ) : null
            )}
          </ul>
        </div>

        <p>{data?.description}</p>
      </div>

      <div className='w-full flex justify-between items-center text-[2.6rem]'>
        <div className='flex items-center gap-5'>
          <a
            title='Github'
            target={`_blank`}
            href={`${data?.github_project_url}`}
          >
            <span className='tooltip' data-tip='Github'>
              <BsGithub className='p-1 rounded-md' />
            </span>
          </a>

          <a
            title='Live Website'
            target={`_blank`}
            href={`${data?.live_website}`}
          >
            <span className='tooltip' data-tip='Live Website'>
              <SiWebmoney className='p-1 rounded-md' />
            </span>
          </a>
        </div>

        <div className='group flex items-center gap-5'>
          <Link href={`/projects/${data?.slug?.current}#project`}>
            <span className='tooltip' data-tip='Open For More Details'>
              <AiFillFolderOpen className='p-1 rounded-md' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
