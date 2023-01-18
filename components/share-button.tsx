import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { CiFacebook } from 'react-icons/ci';
import { GrReddit } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';

interface ShareButtonProps {
  text: string;
}

const ShareButton: React.FC<ShareButtonProps> = (props) => {
  const router = useRouter();

  const URL = `http://localhost:300${router.asPath}`;

  return (
    <div className='flex gap-1 flex-wrap text-[2rem]'>
      <a
        className='inline-flex items-center text-slate-900 p-1 font-medium text-center  bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg max_port_image:text-[1.2rem]'
        title={`Reddit`}
        target={`_blank`}
        href={`https://www.reddit.com/submit?url=${URL}&mini=true`}
      >
        <GrReddit />
      </a>

      <a
        className='inline-flex items-center text-slate-900 p-1 font-medium text-center  bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg max_port_image:text-[1.2rem]'
        title={`Facebook`}
        target={`_blank`}
        href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
      >
        <CiFacebook />
      </a>

      <a
        className='inline-flex items-center text-slate-900 p-1 font-medium text-center  bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg max_port_image:text-[1.2rem]'
        title={`Whatsapp`}
        target={`_blank`}
        href={`https://web.whatsapp.com/send?text=${URL}`}
      >
        <BsWhatsapp />
      </a>

      <a
        className='inline-flex items-center text-slate-900 p-1 font-medium text-center  bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg max_port_image:text-[1.2rem]'
        title={`Twitter`}
        target={`_blank`}
        href={`https://twitter.com/intent/tweet?url=${URL}&text=${props.text}`}
      >
        <RxTwitterLogo />
      </a>

      <a
        className='inline-flex items-center text-slate-900 p-1 font-medium text-center  bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg max_port_image:text-[1.2rem]'
        title={`Linkedin`}
        target={`_blank`}
        href={`https://www.linkedin.com/sharing/share-offsite?url=${URL}&mini=true`}
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default ShareButton;
