import React from 'react';

import styles from '@/style';

import AddUserForm from '@/components/users/add/AddUserForm';

const addUserPage = () => {
  return(
    <section className={`min-h-screen pt-28 min-[600px]:pt-48 lg:pt-28 ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      <div className='w-[90%] mx-auto'>
        <h1 className={styles.titleText}>Hello! Join our astronaut community</h1>
      </div>

      <div className='pb-2'>
        <p className='text-xs italic text-center'>* These fields are required</p>
        <AddUserForm />
      </div>
    </section>
  )
};

export default addUserPage;