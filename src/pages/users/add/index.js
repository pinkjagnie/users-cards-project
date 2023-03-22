import React from 'react';
import Image from 'next/image';

import { astronautOnRocket } from '@/assets/index';
import styles from '@/style';

import AddUserForm from '@/components/users/add/AddUserForm';

const addUserPage = () => {
  return(
    <section className={`min-h-screen pt-28 min-[600px]:pt-48 lg:pt-28 ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      <div className='w-[90%] max-[300px]:w-[95%] min-[600px]:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto flex justify-center items-center'>
        <h1 className={styles.titleText}>Hello! Join our astronaut community</h1>
        <Image src={astronautOnRocket} width={130} height={130} alt="astronaut" className='lg:w-[150px] lg:h-[150px]' />
      </div>
      <div className='pt-6 pb-2'>
        <p className='text-xs italic text-center'>* These fields are required</p>
        <AddUserForm />
      </div>
    </section>
  )
};

export default addUserPage;