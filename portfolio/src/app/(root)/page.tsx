import Image from 'next/image';
import ProfileLayout from '@/components/layout/profile';
import { Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  AITools,
  blockchainNetworks,
  databases,
  Frameworks,
  languages,
  OtherTools,
} from '@/lib/utils/constants';
import DashboardProjectCard from '@/components/common/project-card-dashboard';

const Home = () => {
  return (
    <ProfileLayout>
      <section className=''>
        <div>
          <div className='flex items-center justify-between mb-6'>
            {/* <div>
              <h1 className='text-3xl font-bold'>Rocky Essel</h1>
              <h3 className='text-grey-400 text-lg mt-1'>
                Owner of{' '}
                <a
                  href='http://symbion.site/?ref=esselr.vercel.app'
                  className='text-lime-600 hover:underline cursor-pointer'
                >
                  Symbion
                </a>
              </h3>
            </div> */}
            <div className='flex items-center bg-gray-900 rounded-full px-3 py-1.5 w-fit'>
              <Search size={16} className='text-gray-500 mr-2' />
              <span className='text-gray-400 mr-2 text-sm'>{`What's Happening`}</span>
              <div className='flex items-center'>
                <span className='text-gray-400 mr-1 text-sm'>Launched</span>
                <span className='text-blue-400 text-sm'>Focus Amplified ↗</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className='mb-8 flex flex-col gap-2'>
            <h2 className='text-4xl font-semibold'>
              I am dedicated to learning and growing in the fields of electrical
              engineering, blockchain technology, robotics and quantum
              computing.
            </h2>

            <Separator className='mt-4' />
            <h2 className='text-xl font-semibold'>Bio Summary</h2>
            <p className='text-md'>
              {`As a curious and enthusiastic individual, I'm passionate about exploring the intersection of robotics and quantum computing. I'm fascinated by the potential of these technologies to transform industries and improve lives. My goal is to develop a strong foundation in these fields and contribute to innovative projects that push the boundaries of what's possible. With a strong work ethic and a willingness to learn, I'm excited to take on new challenges and grow as a professional.`}
            </p>
          </section>
          <Separator className='my-4' />
          {/* Tools Section */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold'>Tools I Work With</h2>

            <div className='w-full grid grid-cols-3 gap-4 mt-4'>
              <div className='flex flex-col gap-2'>
                <p>Languages</p>
                <div className='inline-flex flex-wrap gap-2'>
                  {languages.map((language, index) => (
                    <div
                      key={index}
                      className='w-fit inline-flex items-center gap-1 bg-zinc-800/50 p-1 border border-zinc-700/40 rounded-md'
                    >
                      {language.icon}
                      {language.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <p>Frameworks</p>
                <div className='inline-flex flex-wrap gap-2'>
                  {Frameworks.map((Framework, index) => (
                    <div
                      key={index}
                      className='w-fit inline-flex items-center gap-1 bg-zinc-800/50 p-1 border border-zinc-700/40 rounded-md'
                    >
                      {Framework.icon}
                      {Framework.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <p>Blockchain</p>
                <div className='inline-flex flex-wrap gap-2'>
                  {blockchainNetworks.map((blockchainNetwork, index) => (
                    <div
                      key={index}
                      className='w-fit inline-flex items-center gap-1 bg-zinc-800/50 p-1 border border-zinc-700/40 rounded-md'
                    >
                      {blockchainNetwork.icon}
                      {blockchainNetwork.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <p>Databases</p>
                <div className='inline-flex flex-wrap gap-2'>
                  {databases.map((database, index) => (
                    <div
                      key={index}
                      className='w-fit inline-flex items-center gap-1 bg-zinc-800/50 p-1 border border-zinc-700/40 rounded-md'
                    >
                      {database.icon}
                      {database.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <p>Others</p>
                <div className='inline-flex flex-wrap gap-2'>
                  {OtherTools.map((otherTool, index) => (
                    <div
                      key={index}
                      className='w-fit inline-flex items-center gap-1 bg-zinc-800/50 p-1 border border-zinc-700/40 rounded-md'
                    >
                      {otherTool.icon}
                      {otherTool.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <p>AI Tools</p>
                <div className='inline-flex flex-wrap gap-2'>
                  {AITools.map((aiTool, index) => (
                    <div
                      key={index}
                      className='w-fit inline-flex items-center gap-1 bg-zinc-800/50 p-1 border border-zinc-700/40 rounded-md'
                    >
                      {aiTool.icon}
                      {aiTool.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pinned Projects Section */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold'>Pinned Projects</h2>
            <div className='grid grid-cols-2 gap-6 mt-4'>
              {Array.from({ length: 2 }).map((_, index) => (
                <DashboardProjectCard
                  key={index}
                  title='RE Portfolio Web App'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus repellendus impedit, non tempora dicta, sequi delectus possimus obcaecati aspernatur praesentium, magnam fuga animi provident dignissimos commodi molestias quam ipsum?'
                  category='Pinned'
                  priority='Medium'
                  assignees={[
                    { name: 'John Doe', image: '/path/to/image1.jpg' },
                    { name: 'Jane Smith', image: '/path/to/image2.jpg' },
                  ]}
                  comments={23}
                  attachments={12}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default Home;

{
  /* Experience Section */
}
{
  /* <section className='mb-8'>
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
  </section> */
}
