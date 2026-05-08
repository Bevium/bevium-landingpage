import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { heroStats } from '@/lib/data'

const TubesBackground = dynamic(
  () => import('@/components/ui/tubes-background').then((m) => m.TubesBackground),
  { ssr: false }
)

const WORDS = ['build.', 'architect.', 'ship.']

const STACK = [
  'Automation',
  'AI Integration',
  'Unreal Engine 5',
  'Digital Twins',
  'Simulation & Training',
  'Data Visualization',
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 2000)
    return () => clearTimeout(id)
  }, [wordIndex])

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-bevium-black">
      {/* Interactive 3D cursor scene */}
      <div className="absolute inset-0 z-0">
        <TubesBackground className="min-h-[100svh]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        {/* Headline block */}
        <div className="mx-auto flex w-full max-w-9xl flex-1 flex-col justify-center px-6 py-16 md:px-10 md:py-24">
          <p className="mb-8 max-w-md font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
            <span className="mr-3 inline-block h-px w-8 bg-bevium-red align-middle" />
            Your Technical partner for
          </p>

           {/* Technical stack chips */}
          <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
            {STACK.map((s) => (
              <span
                key={s}
                className="border border-white/30 bg-bevium-black/30 px-4 py-2 font-minora text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/5 md:px-5 md:py-2.5 md:text-xs"
              >
                {s}
              </span>
            ))}
          </div>

          <h1 className="font-minora text-[2.4rem] font-black leading-[0.95] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-[6.8rem] xl:text-[7.5rem] headline-glow">
            <span className="block">Tech solutions for problems</span>
            <span className="block">
              <em className="not-italic text-bevium-red">hard</em>
              <span className="text-white/60"> to </span>
              <span className="relative inline-flex overflow-hidden align-bottom text-white/60">
                <span className="invisible" aria-hidden="true">architect.</span>
                {WORDS.map((word, index) => (
                  <motion.span
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: '100%' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      wordIndex === index
                        ? { y: 0, opacity: 1 }
                        : { y: wordIndex > index ? '-100%' : '100%', opacity: 0 }
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>
          <div className="mt-10 max-w-2xl">
            <p className="font-minora text-lg leading-relaxed text-white/70 md:text-xl">
              Bevium integrates senior engineers directly into your workflow.<br/>Not outsourcing. Co-development from day one.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-bevium-red px-8 py-4 font-minora text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-bevium-red-bright cursor-pointer"
              data-cursor="hover"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 border border-white/30 bg-bevium-black/30 px-8 py-4 font-minora text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/5 cursor-pointer"
              data-cursor="hover"
            >
              See the work
            </a>
          </div>
        </div>

        {/* Bottom stats / scroll cue */}
        <div className="border-t border-white/10 bg-bevium-black">
          <div className="mx-auto grid max-w-9xl grid-cols-2 gap-px overflow-hidden bg-white/5 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 bg-bevium-black px-6 py-6 md:px-10 md:py-8"
              >
                <span className="font-minora text-3xl font-black text-white md:text-5xl">
                  {stat.value}
                </span>
                <span className="font-minora text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 md:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-44 right-6 z-10 hidden flex-col items-center gap-2 text-white/40 md:right-10 lg:flex">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          scroll
        </span>
      </div>
    </section>
  )
}
