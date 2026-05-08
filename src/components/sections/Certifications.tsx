import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import Reveal from '@/components/ui/reveal'

const credentials = [
  {
    year: '2023',
    image: '/images/certifications/uai-2023.png',
    link: 'https://www.credential.net/e2779597-8889-493e-9c63-4d5e48c3fdba#acc.OMUGTPLQ',
    current: false,
  },
  {
    year: '2024',
    image: '/images/certifications/uai-2024.png',
    link: 'https://www.credential.net/e7348df1-cd55-476c-be2e-ff3ee0e2f89d#acc.MQC390Xp',
    current: false,
  },
  {
    year: '2025',
    image: '/images/certifications/uai-2025.png',
    link: 'https://www.credential.net/aae31ded-53f6-4508-a31e-b511ea231192#acc.nfKZhijc',
    current: false,
  },
  {
    year: '2026',
    image: '/images/certifications/uai-2026.png',
    link: 'https://credential.unrealengine.com/6a70162f-7dcf-45df-bb56-bd6000bc4ca3#acc.mhGD3KL8',
    current: true,
  },
]

const current = credentials.find((c) => c.current)!
const past = credentials.filter((c) => !c.current)

export default function Certifications() {
  return (
    <div className="mx-auto max-w-9xl px-6 md:px-10">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">

        {/* Left: text */}
        <Reveal className="md:col-span-7">
          <p className="mb-6 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
            <span className="inline-block h-px w-10 bg-bevium-red" />
            Credentials · Epic Games
          </p>
          <h2 className="mb-8 font-minora text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Unreal Authorized
            <br />
            <span className="text-white">Instructors.</span>
          </h2>
          <p className="max-w-xl font-minora text-base leading-relaxed text-white/60 md:text-lg">
            Bevium members hold the Epic Games Unreal Authorized Instructor
            certification: the program&apos;s highest recognition for
            instructional expertise across the full UE5 ecosystem. Renewed
            without interruption every year since 2023.
          </p>
        </Reveal>

        {/* Right: badge composition — current large, past small below */}
        <Reveal delay={200} className="flex flex-col items-center gap-8 md:col-span-5 md:items-end">

          {/* Current badge — large, featured */}
          <a
            href={current.link}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="hover"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-48 transition-opacity duration-300 group-hover:opacity-80 md:w-60 lg:w-72">
              <Image
                src={current.image}
                alt="Unreal Authorized Instructor 2026 — Epic Games"
                width={300}
                height={300}
                className="h-auto w-full drop-shadow-[0_0_60px_rgba(226,6,18,0.22)]"
              />
            </div>
          </a>

          {/* Previous badges — small, dimmed, renewal history */}
          <div className="flex items-end gap-5">
            {past.map((c) => (
              <a
                key={c.year}
                href={c.link}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="hover"
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 opacity-40 transition-opacity duration-300 group-hover:opacity-70 md:w-16 lg:w-20">
                  <Image
                    src={c.image}
                    alt={`Unreal Authorized Instructor ${c.year} — Epic Games`}
                    width={80}
                    height={80}
                    className="h-auto w-full"
                  />
                </div>
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-white/50">
                  {c.year}
                </span>
              </a>
            ))}
          </div>

        </Reveal>

      </div>
    </div>
  )
}
