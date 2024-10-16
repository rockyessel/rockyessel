import {
  FileText,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  Instagram,
  Music,
  Dribbble,
} from 'lucide-react';
import { Medium } from '@/assets';
import { getJsonLd, getPageSEO, pageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';
import JsonLDPage from '@/components/common/json-ld-page';
import { Fragment } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('contact');
}

const ContactPage = () => {
  const seoDetails = pageSEO['contact'];
  const jsonLd = getJsonLd(seoDetails, 'contact');

  return (
    <Fragment>
      <JsonLDPage jsonLd={jsonLd} />;
      <div className='max-w-2xl mx-auto p-8 text-center'>
        <div className='mb-2'>
          <span className='inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
          <h1 className='text-4xl font-bold inline'>{`Let's work together`}</h1>
        </div>

        <p className='text-gray-600 mb-6'>
          I would love to hear from you, so please feel free to reach out.
        </p>

        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          <Button icon={<FileText size={18} />} text='CV/Résumé' dark />
          <Button icon={<Mail size={18} />} text='aj@ayanbisi.com' />
          <Button icon={<Phone size={18} />} text='+234 818 344 0913' />
        </div>

        <div className='grid grid-cols-4 gap-y-4 mb-8'>
          <SocialLink icon={<Linkedin size={24} />} name='LinkedIn' />
          <SocialLink icon={<Twitter size={24} />} name='X (Twitter)' />
          <SocialLink icon={<Medium />} name='Medium' />
          <SocialLink icon={<Youtube size={24} />} name='YouTube' />
          <SocialLink icon={<Github size={24} />} name='GitHub' />
          <SocialLink icon={<Instagram size={24} />} name='Instagram' />
          <SocialLink icon={<Music size={24} />} name='TikTok' />
          <SocialLink icon={<Dribbble size={24} />} name='Dribbble' />
        </div>

        <footer className='text-sm text-gray-500'>
          <p>© 2023 Akorede J. Ayanbisi. All Rights Reserved.</p>
          <p>Last updated by Akorede on January 13, 2024 — 10:10 AM GMT+1</p>
        </footer>
      </div>
    </Fragment>
  );
};

export default ContactPage;

const Button = ({ icon, text, dark = false }: any) => (
  <button
    className={`flex items-center px-4 py-2 rounded-full ${
      dark ? 'bg-black text-white' : 'bg-gray-200 text-black'
    }`}
  >
    {icon}
    <span className='ml-2 text-sm'>{text}</span>
  </button>
);

const SocialLink = ({ icon, name }: any) => (
  <a href='#' className='flex flex-col items-center'>
    {icon}
    <span className='text-sm mt-1'>{name}</span>
  </a>
);
