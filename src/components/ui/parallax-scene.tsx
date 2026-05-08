'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxLayer {
  /** layer key, used as data-parallax-layer="X" */
  key: string
  /** scroll-driven yPercent target */
  yPercent: number
  /** content for this layer */
  content: ReactNode
  /** optional className for the layer wrapper */
  className?: string
}

interface ParallaxSceneProps {
  layers: ParallaxLayer[]
  className?: string
  /** total scroll distance: multiplier of viewport height. Higher = slower */
  scrollLength?: number
  children?: ReactNode
}

export function ParallaxScene({
  layers,
  className,
  scrollLength = 1.5,
  children,
}: ParallaxSceneProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const stage = root.querySelector('[data-parallax-layers]') as HTMLElement | null
    if (!stage) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${window.innerHeight * scrollLength}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      })

      layers.forEach((layer, idx) => {
        tl.to(
          stage.querySelectorAll(`[data-parallax-layer="${layer.key}"]`),
          { yPercent: layer.yPercent, ease: 'none' },
          idx === 0 ? undefined : '<'
        )
      })
    }, root)

    return () => ctx.revert()
  }, [layers, scrollLength])

  return (
    <div
      ref={rootRef}
      className={cn('relative w-full bg-bevium-black', className)}
    >
      <section className="parallax-stage">
        <div data-parallax-layers className="parallax-stage__layers">
          {layers.map((layer) => (
            <div
              key={layer.key}
              data-parallax-layer={layer.key}
              className={cn('parallax-stage__layer', layer.className)}
            >
              {layer.content}
            </div>
          ))}
          <div className="parallax-stage__fade" />
        </div>
      </section>
      {children}
    </div>
  )
}

export default ParallaxScene
