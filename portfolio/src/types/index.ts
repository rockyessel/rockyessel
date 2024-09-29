export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  liveSite: string;
  images: string[];
  video: string;
}

export interface IProject {
  readme: string;
  general: {
    name: string;
    slug: string;
    description: string;
    sourceCode: string;
    demo: string;
    tags: string[];
  };
  technicalDetails: {
    type: 'web2' | 'web3';
    language: string;
    frameworks: string;
  };
  media: {
    images: string[];
    videos: string[];
    documents: { name: string; url: string };
  };
}
