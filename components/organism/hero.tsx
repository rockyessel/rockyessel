import { adding_skills } from '@/utils/services';
import Link from 'next/link';
import { FollowButton, SkillsCard } from '@/components';

interface Props {}

const Hero = () => {
  return (
    <section className=' mt-5 md:mt-28'>
      <div className='flex flex-col gap-5'>
        <div>
          <span className='text-white text-3xl'>Hello, my name is Rocky</span>
          <p className='font-bold font-noe text-5xl md:text-7xl'>
            Am a web developer
          </p>
        </div>

        <p className='text-lg md:text-2xl md font-light'>
          I am a front-end developer with experience building web applications.
          I have a passion for creating a better web, with a focus on speed,
          ease of use, aesthetic design, accessibility, and user satisfaction.
        </p>
        <p className='text-lg md:text-2xl font-light'>
          My goal is to work in a company where I can deliver business value
          while also growing as a web developer.
        </p>
        <div className='flex flex-col gap-5'>
          <p className=' text-lg md:text-2xl font-light'>
            Here are my tools🧰:
          </p>

          <SkillsCard arr_data={adding_skills} />
        </div>

        <div className='flex items-center gap-3 md:gap-5md:text-3xl text-2xl'>
          <FollowButton />

          <Link href='/contact'>
            <button
              title='Contact me'
              type='button'
              className=' hover:scale-[1.1] md:ml-6 origin-center hover:origin-top transition-all duration-500 after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-rose-500'
            >
              Contact me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
