import { Cpu, Boxes, Code2, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/reveal'
import { pillars } from '@/lib/data'

const ICONS = [Cpu, Boxes, Code2]

export default function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      className="relative bg-bevium-black py-28 md:py-44"
    >
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="mb-20 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
              <span className="inline-block h-px w-10 bg-bevium-red" />
              What we build
            </p>
            <h2 className="font-minora text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Three disciplines.
              <br />
              <span className="text-white/40">One engineering bar.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <p className="font-minora text-base leading-relaxed text-white/60 md:text-lg">
              We focus where complexity is the bottleneck: AI systems, real-time
              3D, and the kind of engineering that decides whether the project
              ships in two months or two years.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = ICONS[i] ?? Cpu
            return (
              <Reveal
                key={p.title}
                delay={i * 100}
                className="group relative flex flex-col gap-8 bg-bevium-black p-8 transition-colors duration-300 hover:bg-bevium-dark md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-bevium-red">
                    {p.eyebrow}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-colors duration-300 group-hover:border-bevium-red group-hover:bg-bevium-red/10">
                    <Icon className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-bevium-red" />
                  </div>
                </div>

                <h3 className="font-minora text-3xl font-black leading-tight text-white md:text-4xl">
                  {p.title}
                </h3>

                <p className="text-base leading-relaxed text-white/60">
                  {p.body}
                </p>

                <ul className="mt-auto space-y-3 border-t border-white/10 pt-6">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 font-minora text-sm font-bold text-white/80"
                    >
                      <ArrowRight className="mt-1 h-3 w-3 flex-shrink-0 text-bevium-red" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
