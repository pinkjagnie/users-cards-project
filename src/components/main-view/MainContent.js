import React, { useEffect, useState } from "react";

import styles from "@/style";

import SingleUserCard from "./SingleUserCard";

const MainContent = () => {
  const [astroUsers, setAstroUsers] = useState();

  useEffect(() => {
    fetch('/api/users/get', {
       headers: {
       'Content-Type': 'application/json',
      },
    }).then(response => response.json())
    .then(data => {
      // console.log(data);
      setAstroUsers(data)
    });
  }, [astroUsers])

  return(
    <section className={`min-h-screen pt-28 min-[600px]:pt-36 lg:pt-28 pb-10 ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      <div className="w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] mx-auto">
        <h1 className={styles.titleText}>Welcome to outer space where you can find other astronauts!</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:justify-items-center md:py-4 max-w-[1280px]">
          {astroUsers && astroUsers.map((user) => {
            return (
              <SingleUserCard key={user._id} user={user} />
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default MainContent;