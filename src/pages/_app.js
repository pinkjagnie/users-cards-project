import Head from 'next/head';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return(
    <>
     <Head>
        <title>AstroUsers - join us in outer space</title>
        <meta name="description" content="AstroUsers - join us in outer space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/astroFavicon_48-48.png" />
      </Head>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </>
  )
}
