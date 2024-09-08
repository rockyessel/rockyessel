import ProfileLayout from '@/components/layout/profile';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <ProfileLayout>
      <section>
        <div>
          <header>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <h1 className='text-2xl'>Rocky Essel</h1>
                <h3 className='text-grey-400 text-lg mt-1'>
                  Software Engineer at{' '}
                  <a
                    href='http://symbion.com/?ref=esselr,vercel.app'
                    className='hover:underline cursor-pointer'
                  >
                    Symbion
                  </a>
                </h3>
              </div>
              icon
            </div>
          </header>
        </div>
        <div className='text-grey-800 mt-10 space-y-5'>
          <p>
            Building polished software experiences with magical, unique and
            delightful details, for the web. I aim to create beautiful and
            functional software that is both intuitive and enjoyable for users.
          </p>
          <p>
            I have a passion for learning, and I am constantly seeking to
            improve my skills mostly through{' '}
            <span className='inline-link'>reading</span> and{' '}
            <Link href='/blog'>
              <span className='inline-link'>writing</span>
            </Link>
            . {`I'm interested in`}
            <em> TypeScript</em> and <em> Rust</em>, and at the same time,{' '}
            {`I'm`}
            also experimenting with native apps with <em> Swift</em>.
          </p>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default Home;
