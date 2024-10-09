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
  SoliditySVG,
  ActixWebSVG,
  VaraNetworkSVG,
  GearProtocolSVG,
  AptosNetworkSVG,
} from '@/assets';

export const packageManagers = [
  { name: 'npm', icon: <NpmSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'yarn', icon: <YarnSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'cargo', icon: <CargoSVG className='w-4 h-4' strokeWidth={2.25} /> },
];

export const languages = [
  { name: 'HTML 5', icon: <HtmlSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'CSS3', icon: <CSS3SVG className='w-4 h-4' strokeWidth={2.25} /> },
  {
    name: 'JavaScript',
    icon: <JavaScriptSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'TypeScript',
    icon: <TypeScriptSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  { name: 'Rust', icon: <RustSVG className='w-4 h-4' strokeWidth={2.25} /> },
  {
    name: 'Python',
    icon: <PythonSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  // { name: 'Solidity', icon: <SoliditySVG className='w-4 h-4' strokeWidth={2.25} /> },
];

export const databases = [
  {
    name: 'MongoDB',
    icon: <MongoDBSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Supabase',
    icon: <MongoDBSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Grafbase',
    icon: <MongoDBSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Outerbase',
    icon: <MongoDBSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'PostgreSQL',
    icon: <MongoDBSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
];

export const Frameworks = [
  {
    name: 'React.Js',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Next.Js',
    icon: <NextJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Actix Web',
    icon: <ActixWebSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Node.Js',
    icon: <ActixWebSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Express.Js',
    icon: <ActixWebSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
];

export const blockchainNetworks = [
  {
    name: 'Gear Protocol',
    icon: <GearProtocolSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Vara Network',
    icon: <VaraNetworkSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Aptos Network',
    icon: <AptosNetworkSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Move',
    icon: <AptosNetworkSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
];

export const OtherTools = [
  { name: 'npm', icon: <NpmSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'yarn', icon: <YarnSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'cargo', icon: <CargoSVG className='w-4 h-4' strokeWidth={2.25} /> },
  {
    name: 'VS Code',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'TailwindCSS',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'ShadCN UI',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Canva',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'Photoshop',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
];

export const AITools = [
  { name: 'ChatGPT', icon: <NpmSVG className='w-4 h-4' strokeWidth={2.25} /> },
  { name: 'Meta AI', icon: <YarnSVG className='w-4 h-4' strokeWidth={2.25} /> },
  {
    name: 'Gemini',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  {
    name: 'HaggingChat',
    icon: <CargoSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
  { name: 'Groq', icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} /> },
  {
    name: 'Copilot',
    icon: <ReactJsSVG className='w-4 h-4' strokeWidth={2.25} />,
  },
];

export const CATEGORIES = {
  'Quantum Computing': [
    'Quantum Algorithms',
    'Quantum Cryptography',
    'Quantum Machine Learning',
    'Quantum Supremacy',
    'Quantum Information Theory',
    'Quantum Error Correction',
    'Quantum Hardware',
    'Quantum Gates and Circuits',
    'Quantum Annealing',
    'Quantum Communication',
    'Quantum Entanglement',
    'Quantum Simulation',
    'Quantum Key Distribution (QKD)',
    'Topological Quantum Computing',
    'Adiabatic Quantum Computing',
    'Quantum Sensors',
    'Quantum Network',
    'Quantum Coherence and Decoherence',
    'Quantum State Measurement',
    'Quantum Computing Software Development',
  ],
  Robotics: [
    'Autonomous Robots',
    'Humanoid Robots',
    'Industrial Robotics',
    'Medical Robotics',
    'Swarm Robotics',
    'Soft Robotics',
    'Cognitive Robotics',
    'Robot Perception',
    'Robot Kinematics and Dynamics',
    'Robot Learning',
    'Robotic Manipulation',
    'Robotic Navigation',
    'Robotic Vision',
    'Mobile Robots',
    'Exoskeletons',
    'Teleoperation and Telerobotics',
    'Robot Operating Systems (ROS)',
    'Artificial Intelligence in Robotics',
    'Robotics Control Systems',
    'Robotic Process Automation (RPA)',
    'Underwater Robotics',
    'Aerial Robotics (Drones)',
    'Collaborative Robots (Cobots)',
    'Robotics in Space Exploration',
  ],
  Blockchain: [
    'Decentralized Finance (DeFi)',
    'Smart Contracts',
    'Consensus Mechanisms (PoW, PoS, DPoS)',
    'Layer 1 Blockchain',
    'Layer 2 Solutions',
    'Tokenomics',
    'Blockchain Security',
    'Cryptocurrencies',
    'Blockchain Scalability',
    'Blockchain Interoperability',
    'Distributed Ledger Technology (DLT)',
    'Non-Fungible Tokens (NFTs)',
    'Blockchain Governance',
    'Permissioned vs Permissionless Blockchains',
    'Blockchain Privacy (ZK-SNARKs, ZK-Rollups)',
    'Blockchain for Supply Chain Management',
    'Blockchain Development Frameworks (e.g., Ethereum, Solana)',
    'Decentralized Applications (dApps)',
    'Blockchain Oracles',
    'Decentralized Autonomous Organizations (DAOs)',
    'Blockchain for Identity Management',
    'Cross-Chain Protocols',
    'Blockchain in Healthcare',
    'Blockchain Analytics',
    'Consensus Algorithm Design',
    'Blockchain Storage Solutions (IPFS, Filecoin)',
    'Blockchain Regulation and Compliance',
    'Blockchain Energy Consumption',
  ],
  'Electrical Engineering': [
    'Power Systems Engineering',
    'Electromagnetics',
    'Control Systems',
    'Digital Signal Processing (DSP)',
    'Analog Circuits',
    'Digital Circuits',
    'Microelectronics',
    'Embedded Systems',
    'VLSI Design',
    'Renewable Energy Systems',
    'Power Electronics',
    'Electric Vehicles and Energy Storage',
    'High Voltage Engineering',
    'Communication Systems',
    'Optoelectronics',
    'Nanoelectronics',
    'Biomedical Electronics',
    'Wireless Communications',
    'Photonics',
    'Sensors and Instrumentation',
    'Microcontrollers and Microprocessors',
    'Telecommunications',
    'RF and Microwave Engineering',
    'Robotics and Mechatronics',
    'Electric Machines and Drives',
    'Semiconductor Devices',
    'Circuit Design and Simulation',
    'Energy Harvesting',
    'Internet of Things (IoT)',
    'Antennas and Propagation',
  ],
};
