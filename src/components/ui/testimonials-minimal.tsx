'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface MinimalTestimonial {
  quote: string
  name: string
  role: string
  image: string
}

interface TestimonialsMinimalProps {
  testimonials: MinimalTestimonial[]
  className?: string
}

export function TestimonialsMinimal({
  testimonials,
  className,
}: TestimonialsMinimalProps) {
  const [active, setActive] = useState(0)

  if (!testimonials.length) return null

  return (
    <div className={cn('mx-auto w-full max-w-3xl', className)}>
      {/* Quote */}
      <div className="relative min-h-[160px] md:min-h-[200px]">
        {testimonials.map((t, i) => (
          <p
            key={t.name + i}
            className={cn(
              'absolute inset-0 font-minora text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white',
              'transition-all duration-500 ease-out',
              active === i
                ? 'opacity-100 translate-y-0 blur-0'
                : 'pointer-events-none opacity-0 translate-y-4 blur-[2px]'
            )}
          >
            <span className="text-bevium-red">&ldquo;</span>
            {t.quote}
            <span className="text-bevium-red">&rdquo;</span>
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="mt-12 flex items-center gap-6">
        {/* Avatars */}
        <div className="flex -space-x-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name + 'btn' + i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={cn(
                'relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-bevium-black',
                'transition-all duration-300 ease-out cursor-pointer',
                active === i
                  ? 'z-10 scale-110 ring-bevium-red'
                  : 'grayscale hover:grayscale-0 hover:scale-105'
              )}
              data-cursor="hover"
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-white/20" />

        {/* Active Author Info */}
        <div className="relative min-h-[44px] flex-1">
          {testimonials.map((t, i) => (
            <div
              key={t.name + 'info' + i}
              className={cn(
                'absolute inset-0 flex flex-col justify-center',
                'transition-all duration-400 ease-out',
                active === i
                  ? 'opacity-100 translate-x-0'
                  : 'pointer-events-none -translate-x-2 opacity-0'
              )}
            >
              <span className="font-minora text-base font-bold text-white">
                {t.name}
              </span>
              <span className="text-sm text-white/50">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsMinimal
