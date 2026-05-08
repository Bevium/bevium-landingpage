import Reveal from '@/components/ui/reveal'
import { processSteps } from '@/lib/data'

const differentiators = [
  'One engineer → one project at a time',
  'Senior support throughout the engagement',
  'Standups, sprints, code reviews — on your tools and your repository',
]

export default function Process() {
  return (
    <section id="process" className="relative bg-bevium-dark py-28 md:py-44">
      <div className="mx-auto max-w-9xl px-6 md:px-10">

        <div className="mb-20 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="mb-6 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
              <span className="inline-block h-px w-10 bg-bevium-red" />
              How we work
            </p>
            <h2 className="font-minora text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              From idea to solution
              <br />
              <span className="text-white/40">in five simple steps.</span>
            </h2>
          </Reveal>

          <Reveal delay={150} className="flex flex-col gap-6 md:col-span-5">
            <p className="font-minora text-base leading-relaxed text-white/60 md:text-lg">
              We work as an extension of your team, not as an external vendor.
            </p>
            <ul className="space-y-4 border-t border-white/10 pt-6">
              {differentiators.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 font-minora text-sm font-bold text-white"
                >
                  <span className="mt-[7px] h-px w-5 flex-shrink-0 bg-bevium-red" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ol className="grid grid-cols-1 gap-[3px] bg-white/10 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} as="div">
              <li className="group relative flex h-full flex-col gap-6 bg-bevium-dark p-8 transition-colors duration-300 hover:bg-bevium-black">
                <div className="flex items-baseline justify-between">
                  <span className="font-minora text-5xl font-black text-bevium-red md:text-6xl">
                    {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-bevium-red" />
                </div>
                <h3 className="font-minora text-xl font-black leading-tight text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  )
}
