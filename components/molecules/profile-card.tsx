import { SiMicrosoftoutlook } from 'react-icons/si';
import FollowButton from '../atoms/follow-btn';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <div className='w-full px-4 py-5 border-[1px] bg-rose-900 flex flex-col gap-2 border-white/60 rounded-md'>
      <span className='text-xs uppercase'>Hire me</span>
      
      <div className='flex flex-col gap-2'>
        <p>
          I am a web developer who is naturally curious and quietly confident. I
          enjoy enhancing my skills and experimenting with different design
          ideas, and then implementing them through coding. My ultimate
          objective is to join a company where I can contribute to its growth by
          delivering business value while also improving my development
          abilities.
        </p>

        <div className='text-4xl flex gap-2 mb-1'>
          <FollowButton />
          <ul className='text-4xl flex gap-2'>
            <li>
              <a rel='noopener' title='Mail' href='mailto:essel_r@outlook.com'>
                <SiMicrosoftoutlook />
              </a>
            </li>
          </ul>
        </div>

        <p className='flex items-center gap-1'>
          Like what I do?
          <Link href='/contact'>
            <span className='font-bold px-2 py-1 rounded-md hover:border hover:border-black hover:bg-black cursor-pointer'>
              Hire me
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
