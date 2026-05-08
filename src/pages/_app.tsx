import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

const CustomCursor = dynamic(() => import('@/components/ui/custom-cursor'), {
  ssr: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Component {...pageProps} />
    </SmoothScrollProvider>
  )
}
