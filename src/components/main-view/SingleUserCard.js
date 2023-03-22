import React from "react";
import Image from "next/image";

import { FaUserCog, FaUserTimes } from 'react-icons/fa';

import { defaultUserProfilePhoto } from "@/assets/index";

import styles from "@/style";

const SingleUserCard = ({ user }) => {
  return(
    <div className="py-4 md:py-0 w-[300px] max-[300px]:w-[250px] max-[340px]:w-[280px] mx-auto">
      <div>
        <Image src={defaultUserProfilePhoto} width={300} height={300} alt="user photo" className="rounded-t-md max-[300px]:w-[250px] max-[340px]:w-[280px]" />
      </div>
      <div className="w-[300px] max-[300px]:w-[250px] max-[340px]:w-[280px] rounded-b-md bg-slate-800 text-zinc-100">
        <div className="w-[90%] mx-auto">
          <div className="font-medium">
            <p className="pt-4 pb-2 uppercase">Name: {user.firstName}</p>
            <p>Age: {user.age}</p>
          </div>
          <div className="w-[90%] mx-auto pt-8 pb-6">
            <p className="underline pb-2">Tags:</p>
            <div className="flex justify-between items-center">
              <span className={styles.tagsLabel}>{user.tagFirst}</span>
              <span className={styles.tagsLabel}>{user.tagSecond}</span>
              <span className={styles.tagsLabel}>{user.tagThird}</span>
            </div>
          </div>
          <div className="flex justify-end pb-6">
            <FaUserCog size={25} className="cursor-pointer hover:text-lime-300"/>
            <FaUserTimes size={25} className="mx-4 cursor-pointer hover:text-lime-300"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleUserCard;