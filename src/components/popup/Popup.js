import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdCloseCircle } from 'react-icons/io';
import { rocketRide } from '@/assets/index';

import styles from '@/style';

const Popup = (props) => {
  return(
    <div className="fixed top-0 left-0 bg-stone-800/60 w-screen h-screen z-30">
      <div className={`absolute w-[100%] min-h-[60%] min-[600px]:min-h-[45%] lg:w-[60%] xl:w-[50%] lg:min-h-[30%] top-[20%] left-0 lg:left-[20%] xl:left-[25%] rounded-md ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
        <IoMdCloseCircle onClick={() => props.closeMsgPopup()} size={35} className="absolute top-4 right-4 xl:top-8 xl:right-12 text-stone-800 cursor-pointer" />

        <div className="flex flex-col justify-center items-center lg:flex-row-reverse w-[90%] mx-auto pt-16 pb-4">
          <p className="font-medium text-lg lg:text-xl text-center uppercase">{props.msgCreated}</p>
          <Image src={rocketRide} height={170} width={170} alt="rocketman" className="pt-4 lg:pt-0 lg:pr-4" />
        </div>

        <div className="flex flex-col xl:flex-row justify-center xl:justify-around py-8">
          <Link href="/" className={`uppercase w-[90%] md:w-[60%] xl:w-[55%] mx-auto py-4 px-6 lg:px-8 xl:px-10 m-2 text-center cursor-pointer font-medium border-2 border-zinc-100 hover:border-stone-800 bg-stone-800 hover:bg-zinc-100 text-zinc-100 hover:text-stone-800`}>Now you can go home</Link>
        </div>
      </div>
    </div>
  )
};

export default Popup;