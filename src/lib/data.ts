import { publicPath } from "./basePath"

export const navLinks = [
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'What we build', href: '#what-we-build' },
  { label: 'Work', href: '#work' },
]

export const heroStats = [
  { value: '2023', label: 'Founded' },
  { value: '10+', label: 'Years avg. seniority' },
  { value: '5+', label: 'Completed Projects' },
  { value: '1:1', label: 'Engineer per Project' },
]

export const pillars = [
  {
    eyebrow: '01 / AI Integration',
    title: 'AI systems that ship.',
    body:
      'Custom runtimes, agentic systems, model wiring, automation and tooling: engineered, profiled and maintained. We own the system, not just the prompt.',
    bullets: [
      'Agentic runtimes & tool use',
      'Model integration & evaluation',
      'Automation pipelines (n8n, custom)',
      'In-engine AI for gameplay & NPCs',
    ],
  },
  {
    eyebrow: '02 / Interactive & 3D',
    title: 'Real-time 3D, made to last.',
    body:
      'Unreal Engine 5 expertise from architecture to ship: simulation, training, configurators, digital twins, and games. Advanced C++ where it matters.',
    bullets: [
      'UE5 Real-Time 3D delivery',
      'Simulation, training & digital twins',
      'Multiplayer & networking',
      'Custom plugins, tooling, SDK integration',
    ],
  },
  {
    eyebrow: '03 / Engineering',
    title: 'Software that holds up.',
    body:
      'Architecture, performance, scalability, and the boring parts: testing, profiling, documentation, handover. Code that survives the next maintainer.',
    bullets: [
      'Advanced C++ architecture',
      'Optimization & profiling',
      'QA, testing & handover',
      'Enterprise integrations & APIs',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Kickoff & goals',
    description:
      'We map context, constraints, and a clear Definition of Done. No briefing-loops: we start where the work is.',
  },
  {
    number: '02',
    title: 'Technical onboarding',
    description:
      'Repository, tools, environments, standards. We learn your stack instead of imposing ours.',
  },
  {
    number: '03',
    title: 'Agile planning',
    description:
      'Work blocks with estimates, milestones, and verifiable deliverables.',
  },
  {
    number: '04',
    title: 'Integrated development',
    description:
      'Standups, reviews, sprints, as an extension of your internal team. Full transparency, your tooling.',
  },
  {
    number: '05',
    title: 'QA & handover',
    description:
      'Testing, essential documentation, release support, continuity.',
  },
]

export const portfolio = [
  {
    id: 'illuvium',
    title: 'Illuvium',
    category: 'Unreal Engine 5 · Web3',
    image: publicPath('/images/portfolio/illuvium.jpg'),
    description:
      'Open-world fantasy battle game on Ethereum. Senior C++ UI engineering and core systems on UE5 + GAS.',
  },
  {
    id: 'staratlas',
    title: 'Star Atlas',
    category: 'Unreal Engine 5 · Web3',
    image: publicPath('/images/portfolio/staratlas.png'),
    description:
      'Space MMO on Solana, powered by UE5. Architecture, multiplayer, Ledger hardware-wallet integration.',
  },
  {
    id: 'shaga',
    title: 'SHAGA',
    category: 'Systems Integration',
    image: publicPath('/images/portfolio/shaga.png'),
    description:
      'Decentralized cloud-gaming protocol: low-latency P2P streaming, Overwolf, Remote Transaction Signing.',
  },
  {
    id: 'arcas',
    title: 'Arcas Champions',
    category: 'Unreal Engine 5',
    image: publicPath('/images/portfolio/arcas-champions.jpg'),
    description:
      'Third-person ability shooter. Gameplay engineering, abilities and combat systems on UE5.',
  },
]

export const founders = [
  {
    name: 'Riccardo Torrisi',
    role: 'Co-Founder · Senior C++ Architect',
    bio: 'Agentic AI · UI Systems · Web3. Unreal Authorized Instructor (Epic Games).',
    credits: 'Illuvium · Star Atlas · Stormind Games · CLARA (UniCT)',
    image: publicPath('/images/team/RiccardoTorrisi.png'),
    linkedin: 'https://www.linkedin.com/in/riccardotorrisi/',
  },
  {
    name: 'Daniele Calanna',
    role: 'Co-Founder · Senior C++ Engineer',
    bio: 'Gameplay AI · Animation · VR · CUDA / parallel computing.',
    credits: 'Illuvium · Star Atlas · Stormind Games · Red Raion · STMicroelectronics',
    image: publicPath('/images/team/DanieleCalanna.png'),
    linkedin: 'https://www.linkedin.com/in/danielecalanna/',
  }
]

export const additionalTeam = [
  { name: 'Manuel Zuccaro', role: 'Engineer', tag: 'UE5 · C++', image: publicPath('/images/team/ManuelZuccaro.png') },
  { name: 'Sabrina Pizzo', role: 'Engineer', tag: 'UE5 · C++', image: publicPath('/images/team/SabrinaPizzo.png') },
]

export const testimonials = [
  {
    quote:
      'Working with Bevium exceeded our expectations. They helped to identify and refine the technical goals of the product, fully architect core systems, and brought high collaborative energy to the team.',
    name: 'Jacob Floyd',
    role: 'CTO · Star Atlas',
    image: publicPath('/images/reviews-profiles/JacobFloyd.jpg'),
  },
  {
    quote:
      'A reliable and effective team, flexible in handling complex challenges.',
    name: 'Matteo Rolfo',
    role: "Managing Director · ARC'S",
    image: publicPath('/images/reviews-profiles/MatteoRolfo.jpg'),
  },
]

export const clientLogos = [
  { name: 'Illuvium', src: publicPath('/images/clients-logo/illuvium.png'), highContrast: true },
  { name: 'Star Atlas', src: publicPath('/images/clients-logo/staratlas.png'), highContrast: true },
  { name: 'SHAGA', src: publicPath('/images/clients-logo/shaga.png'), highContrast: false },
  { name: 'Arcas Champions', src: publicPath('/images/clients-logo/arcaschampions.png'), highContrast: false },
  { name: "ARC'S", src: publicPath('/images/clients-logo/Arcs.png'), highContrast: true },
]

export const contact = {
  email: 'info@bevium.it',
  linkedin: 'https://www.linkedin.com/company/bevium',
  twitter: 'https://x.com/bevium',
  instagram: 'https://www.instagram.com/bevium_it',
  youtube: 'https://www.youtube.com/@BeviumSrl',
  website: 'bevium.it',
}
