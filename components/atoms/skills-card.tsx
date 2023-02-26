import React from 'react';
import { useRouter } from 'next/router';
import { data_list } from '@/utils/services';

const SkillsCard: React.FC = (): JSX.Element => {
  const router = useRouter().asPath.split('/').slice(-1)[0];

  const if_not_equal: boolean = '/' !== router;

  return (
    <ul className='rounded-md py-2 flex flex-wrap gap-2 items-center'>
      {data_list?.map((list, index) => (
        <li
          key={index}
          className='inline-flex text-rose-500 items-center gap-1 border border-white p-1 font-medium'
        >
          {list?.icon} {list?.name}
        </li>
      ))}
    </ul>
  );
};

export default SkillsCard;
