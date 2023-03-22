import React from "react";

import styles from "@/style";

import SingleUserCard from "./SingleUserCard";

const users = [
  {
    id: 1,
    name: 'AstroBetty',
    age: 26,
    tagFirst: 'astro',
    tagSecond: 'women',
    tagThird: 'sydney',
  },
  {
    id: 2,
    name: 'AstroJohn',
    age: 28,
    tagFirst: 'astro',
    tagSecond: 'men',
    tagThird: 'berlin',
  },
  {
    id: 3,
    name: 'AstroDwight',
    age: 32,
    tagFirst: 'astro',
    tagSecond: 'dunder mifflin',
    tagThird: 'scranton',
  },
  {
    id: 4,
    name: 'AstroMichael',
    age: 42,
    tagFirst: 'astro',
    tagSecond: 'boss',
    tagThird: 'dreamland',
  },
  {
    id: 5,
    name: 'AstroPam',
    age: 25,
    tagFirst: 'astro',
    tagSecond: 'women',
    tagThird: 'scranton',
  },
  {
    id: 6,
    name: 'AstroAngela',
    age: 29,
    tagFirst: 'astro',
    tagSecond: 'women',
    tagThird: 'catland',
  },
];

const MainContent = () => {
  return(
    <section className={`min-h-screen pt-28 min-[600px]:pt-36 lg:pt-28 pb-10 ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      <div className="w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] mx-auto">
        <h1 className="pb-4 md:pt-4 lg:pt-0 uppercase font-bold text-xl lg:text-2xl text-center">Welcome to outer space where you can find other astronauts!</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:justify-items-center md:py-4">
          {users.map((user) => {
            return (
              <SingleUserCard key={user.id} user={user} />
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default MainContent;