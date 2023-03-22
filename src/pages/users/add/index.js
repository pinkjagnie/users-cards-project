import React from 'react';

import styles from '@/style';

import AddUserForm from '@/components/users/add/AddUserForm';

const addUserPage = () => {
  return(
    <section className={`min-h-screen pt-28 min-[600px]:pt-36 lg:pt-28 pb-10 ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      <h1 className='pb-4 md:pt-4 lg:pt-0 uppercase font-bold text-xl lg:text-2xl text-center'>Hello! Join our astronaut community</h1>

      <div className='pb-2'>
        <p className='text-xs italic text-center'>* These fields are required</p>
        <AddUserForm />
      </div>
    </section>
  )
};

export default addUserPage;