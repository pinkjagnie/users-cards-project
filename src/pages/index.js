import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import MainContent from '@/components/main-view/MainContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>AstroUsers - join us in outer space</title>
        <meta name="description" content="AstroUsers - join us in outer space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/astroFavicon_48-48.png" />
      </Head>
      <main>
        <MainContent />
      </main>
    </>
  )
}