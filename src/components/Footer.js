import React from 'react';
import Link from 'next/link';

import styles from '@/style';

const Footer = () => {
  return(
    <section className={`flex w-full py-2 ${styles.basicBackgroundColor} ${styles.basicTextColor}`}>
      <Link href="https://www.pinkjagnie.pl" target="_blank" rel="noopener noreferrer" className='w-[80%] text-center text-xs mx-auto'>&copy; {' '}
      {new Date().getFullYear()} | AstroUsers</Link>
    </section>
  )
};

export default Footer;