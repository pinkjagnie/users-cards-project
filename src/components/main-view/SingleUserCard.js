import React from "react";
import Image from "next/image";

import { defaultUserProfilePhoto } from "@/assets/index";

const SingleUserCard = () => {
  return(
    <div className="py-4 md:py-0 w-[300px] mx-auto">
      <div>
        <Image src={defaultUserProfilePhoto} width={300} height={300} alt="user photo" className="rounded-t-md" />
      </div>
      <div className="w-[300px] rounded-b-md bg-slate-800 text-zinc-100">
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
        </div>
      </div>
    </div>
  )
};

export default SingleUserCard;