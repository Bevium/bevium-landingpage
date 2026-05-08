import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TubesBackgroundProps {
  children?: ReactNode
  className?: string
  enableClickInteraction?: boolean
  colors?: string[]
  lights?: string[]
}

const randomHex = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
const randomHexes = (count: number) =>
  new Array(count).fill(0).map(() => randomHex())

const BEVIUM_DEFAULT_COLORS = ['#e20612', '#1d1d1b', '#ffffff']
const BEVIUM_DEFAULT_LIGHTS = ['#e20612', '#ff1a26', '#ffffff', '#ff4757']

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
  colors = BEVIUM_DEFAULT_COLORS,
  lights = BEVIUM_DEFAULT_LIGHTS,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tubesRef = useRef<any>(null)
  const [, setIsLoaded] = useState(false)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      if (!canvasRef.current) return
      try {
        const moduleUrl =
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        // dynamic CDN import: runs only client-side
        const mod: any = await import(/* webpackIgnore: true */ moduleUrl)
        const TubesCursor = mod.default
        if (!mounted || !TubesCursor) return

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors,
            lights: {
              intensity: 200,
              colors: lights,
            },
          },
        })

        tubesRef.current = app
        setIsLoaded(true)
      } catch (err) {
        // Fail silently: gradient fallback handles it
        console.warn('TubesBackground failed to initialise:', err)
      }
    }

    init()

    return () => {
      mounted = false
      try {
        tubesRef.current?.destroy?.()
      } catch {
        /* noop */
      }
    }
  }, [colors, lights])

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return
    try {
      tubesRef.current.tubes.setColors(randomHexes(3))
      tubesRef.current.tubes.setLightsColors(randomHexes(4))
    } catch {
      /* noop */
    }
  }

  return (
    <div
      className={cn(
        'relative w-full h-full min-h-[600px] overflow-hidden bg-bevium-black',
        className
      )}
      onClick={handleClick}
    >
      {/* Fallback gradient (visible if WebGL fails) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(226,6,18,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(226,6,18,0.18),transparent_55%)]"
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        style={{ touchAction: 'none' }}
      />

      {/* Subtle vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]"
      />

      {children && (
        <div className="pointer-events-none relative z-10 h-full w-full">
          {children}
        </div>
      )}
    </div>
  )
}

export default TubesBackground
