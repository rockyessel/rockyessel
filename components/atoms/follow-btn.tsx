import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const FollowButton = () => {
  return (
    <div className='flex gap-2'>
      <a
        title='Github'
        rel='noopener'
        className='hover:scale-125 hover:text-rose-500 origin-center hover:origin-top transition-all duration-500'
        target={`_blank`}
        href='https://github.com/rockyessel'
      >
        <BsGithub />{' '}
      </a>{' '}
      <a
        title='Twitter'
        rel='noopener'
        className='hover:scale-125 hover:text-rose-500 origin-center hover:origin-top transition-all duration-500'
        target={`_blank`}
        href='https://twitter.com/rockyessel'
      >
        <BsTwitter />{' '}
      </a>{' '}
      <a
        title='Linkedin'
        rel='noopener'
        className='hover:scale-125 hover:text-rose-500 origin-center hover:origin-top transition-all duration-500'
        target={`_blank`}
        href='https://www.linkedin.com/in/rockyessel/'
      >
        <BsLinkedin />{' '}
      </a>
    </div>
  );
}

export default FollowButton