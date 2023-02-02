import React from 'react';
import { Head, SubNavbar } from './index';
import Image from 'next/image';
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsLink45Deg,
  BsFillFolderSymlinkFill,
} from 'react-icons/bs';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { LayoutProps } from '@/interface';

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Head
        description={props?.description}
        title={props?.title}
        image={props?.image}
        type={props?.type}
        alt={props?.alt}
        keywords={'portfolio website,blog,website,projects'}
        publishedAt={props?.publishedAt}
        updatedAt={props?.updatedAt}
        MIME={props?.MIME}
        author_name={props?.author_name}
      />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
