import React from 'react';
import { data_list } from '@/utils/services';

interface Props {
  arr_data: string[];
}

const SkillsCard: React.FC<Props> = (props): JSX.Element => {
  return (
    <ul className='rounded-md py-2 text-xl flex flex-wrap gap-2 items-center'>
      {data_list?.map((list, index) =>
        props?.arr_data?.includes(list.name) ? (
          <li
            key={index}
            className='cursor-pointer inline-flex items-center gap-1 border border-rose-500 text-white p-1 font-medium'
            title={list?.name}
          >
            {list?.icon} {list?.name}
          </li>
        ) : null
      )}
    </ul>
  );
};

export default SkillsCard;
