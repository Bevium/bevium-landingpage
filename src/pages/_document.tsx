import { publicPath } from '@/lib/basePath'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={publicPath('/images/logo/Bevium_iconlogo_redblack.png')}/>
        <meta
          name="description"
          content="Bevium: Technical partner for complex software projects with focus on AI integration and interactive/3D software. Senior engineers integrated directly into your team."
        />
        <meta property="og:title" content="Bevium: Engineering for Complex Software" />
        <meta
          property="og:description"
          content="Technical partner for AI integration and interactive/3D software. When complexity is the bottleneck, we become part of your team."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
