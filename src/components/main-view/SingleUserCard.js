import React from "react";
import Image from "next/image";

import { FaUserCog, FaUserTimes } from 'react-icons/fa';

import { defaultUserProfilePhoto } from "@/assets/index";

const SingleUserCard = () => {
  return(
    <div className="py-4 md:py-0 w-[300px] max-[300px]:w-[250px] max-[340px]:w-[280px] mx-auto">
      <div>
        <Image src={defaultUserProfilePhoto} width={300} height={300} alt="user photo" className="rounded-t-md max-[300px]:w-[250px] max-[340px]:w-[280px]" />
      </div>
      <div className="w-[300px] max-[300px]:w-[250px] max-[340px]:w-[280px] rounded-b-md bg-slate-800 text-zinc-100">
        <div className="w-[90%] mx-auto">
          <div className="font-medium">
            <p className="pt-4 pb-2 uppercase">Name: AstroBetty</p>
            <p>Age: 26</p>
          </div>
          <div className="w-[80%] mx-auto pt-4 pb-6">
            <p className="underline">Tags:</p>
            <div className="flex justify-between">
              <label>astro</label>
              <label>woman</label>
              <label>sydney</label>
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