import React from 'react';

import styles from '@/style';

import EditUserDataForm from '@/components/users/edit/EditUserDataForm';

const editUserDataSubPage = (props) => {
  return(
    <section className={`min-h-screen pt-28 min-[600px]:pt-36 lg:pt-28 pb-10 ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      <h1 className={styles.titleText}>Wanna change data of this user? Here you have</h1>
      <EditUserDataForm user={props.user}/>
    </section>
  )
};

export default editUserDataSubPage;

export async function getServerSideProps(context) {

  const { params } = context;
  const { slug } = params;

  console.log(slug)

  let url = `http://localhost:3000/api/users/get/${slug}`;

  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  let user = await res.json();
  let userData = await user

   return {
    props: {
      user: userData,
    }
  };
}