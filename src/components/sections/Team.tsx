import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import Reveal from '@/components/ui/reveal'
import { founders, additionalTeam } from '@/lib/data'

export default function Team() {
  return (
    <section id="team" className="relative bg-bevium-black py-28 md:py-44">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="mb-20 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
              <span className="inline-block h-px w-10 bg-bevium-red" />
              Bevium founders
            </p>
            <h2 className="font-minora text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              People with names,
              <br />
              <span className="text-white/40">faces, and GitHub.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <p className="font-minora text-base leading-relaxed text-white/60 md:text-lg">
              The founders have public profiles, verifiable credentials, and backgrounds you can check on LinkedIn, GitHub, and the projects they've shipped.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
          {founders.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 100}
              className="group relative flex flex-col bg-bevium-dark"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bevium-dark via-transparent to-transparent" />
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center bg-bevium-black/70 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-bevium-red cursor-pointer"
                    aria-label={`LinkedIn (${m.name})`}
                    data-cursor="hover"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bevium-red">
                  {m.role}
                </p>
                <h3 className="font-minora text-2xl font-black leading-tight text-white md:text-3xl">
                  {m.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {m.bio}
                </p>
                <p className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                  {m.credits}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {additionalTeam.length > 0 && (
          <Reveal delay={200} className="mt-12">
            <p className="mb-6 font-minora text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              + Engineering team and contractors
            </p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {additionalTeam.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-4"
                >
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white/10">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-minora text-sm font-bold text-white">
                      {m.name}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40">
                      {m.role} · {m.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
