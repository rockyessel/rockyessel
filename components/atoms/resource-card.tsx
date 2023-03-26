import { FiExternalLink } from 'react-icons/fi';

const ResourceCard = ({ data }: { data: { name: string; url: string }[] }) => {
  return (
    <ul className='w-full font-medium rounded-md p-2 flex flex-col gap-2 divide-y bg-rose-800 border border-black divide-black'>
      {data?.map((ref, index) => (
        <li key={index} className='flex gap-1 p-2 items-center'>
          <FiExternalLink className={`text-[1.3rem]`} />
          <a rel='noopener'  href={ref?.url} target={`_blank`}>
            {ref?.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ResourceCard;
