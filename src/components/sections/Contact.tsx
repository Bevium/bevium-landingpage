import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from '@/components/ui/reveal'
import { contact } from '@/lib/data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bevium-red/80 py-28 md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative mx-auto max-w-9xl px-6 md:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 font-minora text-xs font-bold uppercase tracking-[0.3em] text-white">
            <span className="inline-block h-px w-10 bg-white" />
            Contacts
          </p>
        </Reveal>

        <Reveal as="h2" delay={80} className="font-minora text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[8rem]">
          Let&apos;s talk 
          <br />
          about your project
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-10 max-w-2xl font-minora text-lg leading-relaxed text-white/70 md:text-xl">
            Tell us what you&apos;re building and where you need help.<br/>We&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${contact.email}?subject=Project enquiry`}
              className="group inline-flex items-center justify-center gap-3 bg-bevium-black px-8 py-5 font-minora text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-bevium-dark cursor-pointer"
              data-cursor="hover"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-3 border-2 border-bevium-black px-8 py-5 font-minora text-sm font-bold uppercase tracking-[0.18em] text-bevium-black transition-colors duration-200 hover:bg-bevium-black hover:text-white cursor-pointer"
              data-cursor="hover"
            >
              DM us on LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
