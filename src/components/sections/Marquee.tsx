import Image from 'next/image'
import { clientLogos } from '@/lib/data'

export default function Marquee() {
  const items = [...clientLogos, ...clientLogos]
  return (
    <section
      aria-label="Selected clients"
      className="relative border-y border-white/5 bg-bevium-dark py-10"
    >
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <p className="mb-8 flex items-center justify-center gap-3 font-minora text-[16px] font-bold uppercase tracking-[0.3em] text-white/30">
          Trusted by
        </p>
      </div>
      <div className="mx-auto w-[85%] max-w-7xl overflow-hidden">
        <div className="group relative flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 motion-reduce:animate-none md:gap-24 md:pr-24">
          {items.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-10 w-auto shrink-0 items-center opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-10"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={56}
                className={`h-full w-auto object-contain transition-all duration-300 ${
                  logo.highContrast ? 'brightness-0 invert' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
