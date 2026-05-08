import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled || open
          ? 'bg-bevium-black/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-9xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          aria-label="Bevium home"
          className="flex flex-shrink-0 items-center"
          data-cursor="hover"
        >
          <Image
            src="/images/logo/Bevium_fulllogo_redwhite.svg"
            alt="Bevium"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-minora text-xs font-bold uppercase tracking-[0.18em] text-white/55 transition-colors duration-200 hover:text-white"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-bevium-red px-5 py-2.5 font-minora text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-bevium-red-bright cursor-pointer"
            data-cursor="hover"
          >
            Let&rsquo;s talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center p-2 text-white lg:hidden cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 font-minora text-base font-bold uppercase tracking-[0.18em] text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-bevium-red px-5 py-4 font-minora text-sm font-bold uppercase tracking-[0.18em] text-white"
            >
              Let&rsquo;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
