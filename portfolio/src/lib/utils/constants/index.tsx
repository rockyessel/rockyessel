import {
  CargoSVG,
  CSS3SVG,
  HtmlSVG,
  JavaScriptSVG,
  NpmSVG,
  YarnSVG,
  TypeScriptSVG,
  RustSVG,
  PythonSVG,
  ReactJsSVG,
  NextJsSVG,
  MongoDBSVG,
  SoliditySVG
} from '@/assets';

export const packageManagers = [
  { name: 'npm', icon: <NpmSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'yarn', icon: <YarnSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'cargo', icon: <CargoSVG className='w-4 h-4' strokeWidth={2.25} /> },
];

export const languages = [
  { name: 'HTML 5', icon: <HtmlSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'CSS3', icon: <CSS3SVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'JavaScript', icon: <JavaScriptSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'TypeScript', icon: <TypeScriptSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'Rust', icon: <RustSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'Python', icon: <PythonSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'Solidity', icon: <SoliditySVG className='w-4 h-4' strokeWidth={2.25} /> },
];

export const databases = [
  { name: 'MongoDB', icon: <MongoDBSVG className='w-4 h-4' strokeWidth={2.25} /> },
];

export const Frameworks = [
  { name: 'React.Js', icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'Next.Js', icon: <NextJsSVG className='w-4 h-4' strokeWidth={2.25} /> },
];


export const blockchainTools = [
  { name: 'Gear Protocol', icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} /> },
]

export const blockchainNetworks = [
  { name: 'Vara Network', icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} /> },
  
]