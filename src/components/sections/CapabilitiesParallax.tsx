import dynamic from 'next/dynamic'
import Image from 'next/image'
import Certifications from './Certifications'

const ParallaxScene = dynamic(
  () => import('@/components/ui/parallax-scene').then((m) => m.ParallaxScene),
  { ssr: false }
)

export default function CapabilitiesParallax() {
  return (
    <section id="capabilities" className="relative bg-bevium-black">
      <ParallaxScene
        scrollLength={2}
        layers={[
          // Layer 1: slow backdrop (grid + red wash)
          {
            key: '1',
            yPercent: 60,
            content: (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,6,18,0.18),transparent_55%)]" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                  }}
                />
              </div>
            ),
          },
          // Layer 2: image
          {
            key: '2',
            yPercent: 45,
            content: (
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/images/establishing/RealTime-3d-industrialSimulation.png"
                    alt=""
                    fill
                    className="object-cover opacity-30 mix-blend-screen"
                    sizes="100vw"
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-bevium-black/70 via-bevium-black/30 to-bevium-black/70" />
              </div>
            ),
          },
          // Layer 3: certifications — transparent bg so parallax shows through
          {
            key: '3',
            yPercent: 30,
            content: (
              <div className="flex h-full w-full items-center justify-center [&>section]:border-0 [&>section]:bg-transparent [&>section]:py-0">
                <Certifications />
              </div>
            ),
          },
        ]}
      />
    </section>
  )
}
