import Image from 'next/image'
import Link from 'next/link'
import { contact, navLinks } from '@/lib/data'
import { publicPath } from '@/lib/basePath'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/5 bg-bevium-black">
      <div className="mx-auto max-w-9xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block" data-cursor="hover">
              <Image
                src={publicPath('/images/logo/Bevium_fulllogo_fullwhite.png')}
                alt="Bevium"
                width={140}
                height={36}
              />
            </Link>
            <p className="mt-6 max-w-md font-minora text-base text-white/50">
              Technical partner for software with focus on AI integration and
              interactive / 3D systems. Senior engineers integrated directly
              into your team.
            </p>
            <p className="mt-4 text-sm text-white/30">
              Bevium Srl &middot; Catania, Italy &middot; Founded 2023
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-minora text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-minora text-base font-bold text-white/70 transition-colors duration-200 hover:text-white"
                    data-cursor="hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-minora text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 block font-minora text-2xl font-bold text-white transition-colors duration-200 hover:text-bevium-red md:text-3xl"
              data-cursor="hover"
            >
              {contact.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: 'LinkedIn', href: contact.linkedin },
                { label: 'X', href: contact.twitter },
                { label: 'Instagram', href: contact.instagram },
                { label: 'YouTube', href: contact.youtube },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border border-white/15 px-4 py-2 font-minora text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition-colors duration-200 hover:border-white hover:bg-white/5 hover:text-white cursor-pointer"
                  data-cursor="hover"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/35 md:flex-row md:items-center">
          <p>© {year} Bevium Srl. All rights reserved.</p>
          <p className="font-mono">{contact.website}</p>
        </div>
      </div>
    </footer>
  )
}
