import Image from 'next/image';
import ProfileLayout from '@/components/layout/profile';

const Home = () => {
  return (
    <ProfileLayout>
      <section>
        <div>
          <header>
            <div className='flex items-center justify-between mb-6'>
              <div>
                <h1 className='text-3xl font-bold'>Rocky Essel</h1>
                <h3 className='text-grey-400 text-lg mt-1'>
                  Owner of{' '}
                  <a
                    href='http://symbion.site/?ref=esselr,vercel.app'
                    className='text-lime-600 hover:underline cursor-pointer'
                  >
                    Symbion
                  </a>
                </h3>
              </div>
              <div className='rounded-full overflow-hidden'>
                <Image
                  src='/profile-pic.jpg' // Update with your profile picture
                  alt='Rocky Essel'
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </header>

          {/* About Section */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold'>About Me</h2>
            <p className='text-md mt-2'>
              I am a highly versatile{' '}
              <strong>full-stack Web2 and Web3 developer</strong> with a passion
              for building decentralized applications and blockchain
              technologies. My expertise covers the development of decentralized
              platforms, smart contracts, and APIs.
            </p>
            <p className='text-md mt-2'>
              I use <strong>Next.js</strong>, <strong>React.js</strong>,{' '}
              <strong>Node.js</strong>, <strong>Rust</strong>, and more to build
              full-stack applications. I also develop REST and GraphQL APIs
              deployed in serverless environments.
            </p>
          </section>

          {/* Tools Section */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold'>Tools I Work With</h2>
            <div className='grid grid-cols-3 gap-4 mt-4'>
              {[
                'Next.js',
                'React.js',
                'Node.js',
                'Express.js',
                'TailwindCSS',
                'Rust',
                'SQL/NoSQL',
                'GraphQL',
                'Vercel',
                'IPFS',
              ].map((tool) => (
                <div
                  key={tool}
                  className='bg-gray-100 p-4 rounded-lg shadow-md text-center'
                >
                  {tool}
                </div>
              ))}
            </div>
          </section>

          {/* Pinned Projects Section */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold'>Pinned Projects</h2>
            <div className='grid grid-cols-2 gap-6 mt-4'>
              {[
                {
                  title: 'Symbion: Decentralized Blog CMS',
                  description:
                    'A decentralized platform for blogs and content licensing. Developed with blockchain integration and monetization features.',
                  siteLink: 'http://symbion.site',
                  githubLink: 'https://github.com/rockyessel/symbion',
                },
                {
                  title: 'Web3 Storage Integration',
                  description:
                    'A Web3 decentralized file storage system integrated with Next.js for seamless file uploads and retrieval.',
                  siteLink: 'https://web3.storage/',
                  githubLink: 'https://github.com/rockyessel/web3-storage',
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className='bg-white p-6 rounded-lg shadow-md'
                >
                  <h3 className='text-lg font-semibold mb-2'>
                    <a
                      href={project.siteLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className='text-gray-600'>{project.description}</p>
                  <div className='mt-4'>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lime-600 hover:underline mr-4'
                    >
                      GitHub
                    </a>
                    <a
                      href={project.siteLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lime-600 hover:underline'
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold'>Experience</h2>
            <div className='mt-4'>
              <p>
                <strong>Owner - Symbion (2023-Present)</strong>
              </p>
              <p className='text-gray-600'>
                Building a decentralized blogging platform that prioritizes
                content ownership and blockchain-based monetization.
              </p>
            </div>
            <div className='mt-4'>
              <p>
                <strong>Freelance Developer (2020-Present)</strong>
              </p>
              <p className='text-gray-600'>
                Developed various Web2 and Web3 projects, specializing in
                blockchain integration and full-stack development.
              </p>
            </div>
          </section>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default Home;
