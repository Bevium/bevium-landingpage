import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/ui/reveal'
import { portfolio } from '@/lib/data'

export default function Work() {
  return (
    <section id="work" className="relative bg-bevium-black py-28 md:py-44">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="mb-20 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
              <span className="inline-block h-px w-10 bg-bevium-red" />
              Selected work
            </p>
            <h2 className="font-minora text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Shipped, not pitched.
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <p className="font-minora text-base leading-relaxed text-white/60 md:text-lg">
              Real complexity, shipped. Credits on some of the most technically demanding titles in gaming and Web3.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {portfolio.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 80}
              className="group relative aspect-[4/3] overflow-hidden border border-white/5 bg-bevium-dark md:aspect-[16/10]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bevium-black via-bevium-black/40 to-transparent transition-opacity duration-300 group-hover:from-bevium-black/95" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <div className="flex">
                  <span className="inline-flex items-center border border-white/15 bg-bevium-black/40 px-3 py-1.5 font-minora text-[12px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-2 font-minora text-3xl font-black leading-tight text-white md:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 font-minora text-xs font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Case study
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
