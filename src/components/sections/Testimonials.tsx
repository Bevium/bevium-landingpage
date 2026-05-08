import dynamic from 'next/dynamic'
import Reveal from '@/components/ui/reveal'
import { testimonials } from '@/lib/data'

const TestimonialsMinimal = dynamic(
  () =>
    import('@/components/ui/testimonials-minimal').then(
      (m) => m.TestimonialsMinimal
    ),
  { ssr: false }
)

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-bevium-dark py-28 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,6,18,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-9xl px-6 md:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-6 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-bevium-red">
            <span className="inline-block h-px w-10 bg-bevium-red" />
            Testimonials
          </p>
          <h2 className="font-minora text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            What our clients say.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <TestimonialsMinimal testimonials={testimonials} />
        </Reveal>
      </div>
    </section>
  )
}
