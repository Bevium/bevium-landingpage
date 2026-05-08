import Reveal from '@/components/ui/reveal'

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-bevium-black py-28 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(226,6,18,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="mb-10 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
            <span className="inline-block h-px w-10 bg-bevium-red" />
            Manifesto
          </p>
        </Reveal>

        <Reveal as="h2" className="font-minora text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          We bring engineering capacity{' '}
          <span className="text-white/40">with deep domain expertise in the areas that matter most.</span>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                Bevium is a small team of senior engineers: all with computer-science degrees and shipped
                experience on titles like Star Atlas, Illuvium, Remothered, and
                Batora: Lost Haven.
              </p>
              <p>
                We work as an extension of your team: standups, sprint reviews,
                code reviews on your tools, your repository, your standards.
                Not a deliverable factory in another timezone.
              </p>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                One engineer, one project at a time. Backed continuously by
                senior support. The tradeoff is intentional:
                fewer projects, fewer compromises on what gets shipped.
              </p>
              <p>
                <span className="font-minora font-bold text-white">
                  We don&apos;t sell hours, tasks, or code.
                </span>{' '}
                We sell the capacity to design, ship and maintain systems that
                survive the next maintainer.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
