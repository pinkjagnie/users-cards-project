import React from 'react';
import Link from 'next/link';

import styles from '@/style';

export default function Custom404() {
  return(
    <section className={`min-h-screen ${styles.mainBackgroundColor} text-stone-800`}>
      <div className='pt-32 md:pt-60 lg:pt-28'>
        <h1 className='text-xl font-bold text-center'>Ups! Something went wrong</h1>
        <div className="flex justify-center pt-16 px-2 error-container">
          <span className="four"><span className="screen-reader-text">4</span></span>
          <span className="zero"><span className="screen-reader-text">0</span></span>
          <span className="four"><span className="screen-reader-text">4</span></span>
        </div>
        <div className="flex justify-center pb-10 mx-auto">
          <Link href="/" className={`uppercase py-4 px-24 md:px-32 font-medium text-center cursor-pointer ${styles.basicBackgroundColor} ${styles.basicTextColor} ${styles.hoverBasicBackgroundColor} ${styles.hoverBasicTextColor} border-2 ${styles.borderBasic} ${styles.hoverBorderBasic}`}>Go home</Link>
        </div>
      </div>
      
    </section>
  )
}